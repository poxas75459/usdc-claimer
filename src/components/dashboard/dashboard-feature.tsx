/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "cBw9PeS47o1FhAjXZRxTJFx3ajAS7yfWUiNGRAVPieDZK7ceacfDK6pZR1zrrQTZokMARtnAprBAj2fzuaJYVv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJMnZwJ4XCEVZpReRfdNBPaVBPpqFxYmdQDUv91FYvNGJWTAcb9Wn2at9fZAYfvBKuo8gWguCU8kWFV8zasasGX",
  "key1": "4mw1BEQffadEi8JLxgCnTmNjVWpp9dHEqC2yZZhEuDSXoeRYSSoRFZN9cSPgsWRV94nLAFmL5Ng1pWvQrjDNunMk",
  "key2": "5TmexkfChFerCpKqc47fprBteJrH2UQhtwN3Zkw5er3aSBHAQ89gjyb1ee3nu5TRfBUrUJTTrxGfvPFpsyDxHB6Z",
  "key3": "5p2SjCkHdJDWdZNvUbuPxGixsShE9CmT1zkyPb12nCHsWMXi6pFusEdA1rPUuv6qNSBKwRDjEhRiRwFyYfFyn1Xs",
  "key4": "3S3k5tiQhvQbMFu4twd2xMas9akDCNr9egZUSHgC5GoNL6p5rCTFNFb7DMyGdXdAULXgqEJEmX3ayzAyxh5BmzDL",
  "key5": "NcSTsURgDWvFEbAguNpnfn7LX3JzL62bpuKHrJiNr3gxHUmuTFoEu44ZTpbMQe9TTds2MGonkUCuvbAYsxKcWeR",
  "key6": "4StgiXEaSCcYnr3p8e1UV3hBZZWgcnb54oQoRPawH8rKXQ5Hf8L9eHacRpisDJZUDVbMD75nJ9dHPg97uMoeMtht",
  "key7": "LzHDa4hkDiB7iWWPoVZrzbVzQxg8vReEL39bg1i7pV7yE8HLifjAjnM8cVJKyDKgnGLYtrDKA3Eb7D6uyYchwah",
  "key8": "5hoRJ9sYkgf7Bd1rqTfagLwfX9TBdezbuLRdSNPnsVTUgZTPmK5AzKt5W3S9kVMadGbG37Aa2gZGquHBMkeXYX3o",
  "key9": "3N9uF3R8J8qk5CVvRNHM6v6uRwhm73zryBzsPskmF6hMN6NnXcfKp3uGudGCLoYoUEQfszidkwMAcfVPze39D7Wj",
  "key10": "RA11syg8RaspNpZsyS23GkdoBPzbViUxLToDnwB11en5rFsURFiRgnNZSHdZzUeZbjGcsjytm5MDSko1v1zC29A",
  "key11": "5zTC2eJu1fTt9uUsWpSgAvmMw8XCEiewEtTmBb3FfgsDd4WsoF8yHT3NH7y1x7Rhki4MMjFr4zmEtQCYYFcnDyK3",
  "key12": "5VDRbe6YuMXBtaXjgdfGcmefM3XrHKyjVTfM7AiotLK95A3y1Jpn8qNoqXP5a6JTjbmpfTQ5NiLbD72jybVPZ1je",
  "key13": "wEEENv9yArjwt9aYKQ5xoq8LDcFXum1uRKAzpCiPVwBY5m3aqL4HFiQpN5p4LxmzDiBo9gB6LZicjjVHePdWPcT",
  "key14": "4xoKDzhCKgVJX5j7tyizS7dzS4LAiDZ46qyHZoC7jWZsP3JS7i8prPFkx3qaRhkbaSjMYTdzdjLPhUEQsPHMt7aK",
  "key15": "4Xc1SbreSCZ5g2VeJ7XqaYJ6L7wHneCXmhNu2HVyUQoXcn9HXgAANV52kpsuUURyYui5uJz4rDiDfYR4cp9jD7z1",
  "key16": "5ZcU8tCwwDD5NBaXGtRyhqjdS1nTEtKwFt8oS3U3pHFUpHpoPajm9HLC2wXzwxbmSoWaVCihD5HwjvZcDZih5WHa",
  "key17": "5hLcxRSZQungFnnyeaXcvKs57saASdYbdTdAKvXkuMB12z2xAPt8vwTqfCCce3SLiP15yYSRNqZU5wg4CYgqHfhT",
  "key18": "4ugHmY6UQTyBVcZjEYzrADnvXgqKBkqMCqJ4a8CKzm2ddTCnWKRH9ZjAHSQmigqcevcbXzBCdqZX9pMC69bfa3uN",
  "key19": "481hKeq6xs5uhxzdesFFnHHxzAjGPzc3bse8hLygPA8gGJpLiFNfYciStkaMkxdZJQyX4kidgM8FHptpojnJoyeY",
  "key20": "5vW1RhZCvUBAte8haESzrE2t9Dagy7qJtUfN454QKtB8v4Wt77ZGCjRMbP65dYe27PvcnyFfZ16n4k7Y2Vowwkev",
  "key21": "ocSU5bBgky76ppV18jnZ5UaiLxcgN7vrVncDyfGeWbybmU2pyhceYjp9F7hobUg1KuedgUJqUW7tiZU3yY8ELVi",
  "key22": "5uDbBWj8hZucKqQDqJtHpDNDkbBLYUfMcY7ouXo7w93Ny8S5zHpFL4is5YY4KPYyN7MrPEXhhfrg6BXFKGswN2U",
  "key23": "3AX8M8RebZ3JqcXmkza45b9zSFuiuyQxWUJt4kbb6erKFfkeweH3Cg3zG2HEA6e2bdPqXGLm1N7kuAGhNDL4e4rc",
  "key24": "4JWPE2kwaDcHUTogSQrAEAqx2uacDW5ubvZedyEnCBbFgXu7M2umd3b1mberYhXGcR5TdmD2FhrC6R56meSkmZxA",
  "key25": "3tHkyFdq2tNTe9HVHkDkntW92CRCghmXL3S7XfUR7r5sNePURC5tG6uABTC5zkB3HpRcAb6eJoL8qv8MvbmiT2G5",
  "key26": "45AcagsCoAv6tNWLvvzCo5mny5w5MbKiedGiJ3w8mP5ZUetp3mYZvzxS2KPCB4fGtXaT2CFTrrxTiP9A9ETizbV8",
  "key27": "27gCBgPNvUbedrwwKSri9yhTBXNHCJVZjeAYZgJVjwwZ1fKYy1F2g5KNxmQSTEWky4QSiNUKCjVgnVepmNaL1UUZ",
  "key28": "54Az4as3DdjPkNYjiTz1HgUtbPNxViWt3RVAyzRb4k2EFNURon5931HTjy7rhNcvaLBhh7SY5mE75JLxXPLFBnq9",
  "key29": "48FJa51WgzypfCUCT4gCXmDFcfLgmFtHUAJGMmJa7mGHoa2Ec33qzwoC3hFMDytKCYRyE2aDWWkDS7rvHwSHVssd",
  "key30": "HsL8LDra4KGD1JEBjwnhcLaDhDBDbBqrzMunMhBV1XKjvmx1YkP3ZwvcxLt4TiPv4w21dn4DSAoeLbw9CB3jyqf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
