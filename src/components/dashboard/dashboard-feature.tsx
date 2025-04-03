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
    "3wfQeh69ZRx3Mw1YgnMAAK5EERFoo7VK4B1356rE683dAMuoWg7UCuichnix4PTCpXnvPZjQGxwLMBbg9VdyKmXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRrZhqLXfpp1QiVqiJgJ8xL5XkRnghJ69WDvi1fssZFotoNrNwRoVRzMwJNFNdtDrZWFw6LdgALi5XLNhYmy3he",
  "key1": "4PQD8YSxosbq2NMdLPLgCv6hjTKDRFidBG9JchwZ5soW8EERmTc9pPKGgE6Ha6rNZMcF2pabMdwMHxky2T85XAUD",
  "key2": "ijtfTJSJonGJU56vzVqfMfBT3HSS4qobei7bmymzfH7NZjLwcuRuxDavegY6x2jfw6CxNvZpB9jyDx4xRGGx3Qs",
  "key3": "RYg8Wgm67t1a3NSnRX4ebLfo8pnqHfB12woSHG7apHhAMkpyt7BE1j8U5CzgM1mYoG3RPn116M4pPwjGhodexFf",
  "key4": "337BaWiQjen5xHRTNu8DVyNzRBrUak3QEtD2cuxpsfbMWSvRFVYzkCjb9v3xrQQkR6LKxS2d6fMWZgn29CxmUwMb",
  "key5": "4MMXgJPMRqSSNEcUhXzJkPCwHLedX1tuH8m4XptrNfs8hczB1XuGJtsD4VLHtBKSUhTkhp9BsK1iyTftzcVtc16T",
  "key6": "4VUKAsUZWhhtHUKssANY3Xz71Xz6PicYR1ne1bdf6TG6FTLzNH2xN8JGSPxA4zEg6NRedBNQgutjF8uuomu4FQvu",
  "key7": "2MDC9jogd6LTdNWTaC3PQH1mmXb93RQb1LaHBqK9Qgyn76c9YjXYSd73MgekBR81DcqnGNWztCyyhorZycwxzTP9",
  "key8": "oVgAFs1Mfd9jJhwdGqsASAwwa6nfB7CtrdM6TKLRSK9EKNehDuPuJRNoFSc8ohQp2cQCt4kTxoZ9UqWtrwafiS7",
  "key9": "4k4iB3aMoukCKxr6VMipSYw5TP6aJ8X9Mf6uQDKhRRCoMivnnjqHtaNQzQTEw8QLYuuzdwZzH7AgzLigMwCfxrTk",
  "key10": "3upPq6jATfNp1DC2s4nekubtqMRW1XnRVw2h54mzypyKugGNWrhwKyqegHYPVjZaVSLDkDK93bznbAY3UpGY6och",
  "key11": "2sFoS5gqMpz5bgBWSc32U8mUUGKhTu8CPGXwq3w7sFjey6ghMxSaLGocMaJRsAeVm52H5SKzWKHC6Cc86T39dvPF",
  "key12": "oRxppzUxLiNS5qhN3cT5p2a4BzixVKM7QJL3J3RpMCRzVcvpP9mqrGDNTKYBk6FcTdiqySp32vnpvBXerKWc3AB",
  "key13": "2PtcsFLUKuFF6L2Gb6S8NrH12sC3Tv553MbvHhYjEqbEu7r98HMKheMMucYsKNZQaBCN9GEU6Dm7hDMevf7EwcSc",
  "key14": "2aNNAPmdgQVYRHNSjLY1kZCgYKhb3k9YiJmE9qYdKKkJCkKBMpGGj14X73exX67JUJPc9Y9FpkY4sCTFcRddptVz",
  "key15": "2YVin2x5q1E97H3zSuEv1BXZNTbzA8WcM6pd8pSZu15xWaXFzYSRitaMWMBDahkrBVsXpwG1sJ6gUX7zM3TbTH3i",
  "key16": "5Aw5sCGRLn4DNHHhSoMJCEzETVDbLLVSrNZ4K3dNYndtYsoFDFWzGHkzrLFvSSyvradMxgad6kuirs7hAEhAUX7p",
  "key17": "pq4dx4kbCJuoeB7kKXtNxJjQ5hZ8sxSryX2FdcHGArXEHZrkb9xp2R3eQJmoBYZsY4BL2rH7MBoqGyhJPM75wab",
  "key18": "3FfQYySruBJ2p9tCpkYpyAQK6ts8poFozxJ19fChSUR4Z2xHVeQUncAPz7YPWxeWGaoBrVs6ovfYRGxx41PGdtnT",
  "key19": "4cu9bFpZ4C82pHzrVPLHZEP9ky8XEZwXtEifmterJ5zwwr5QLXn7mWbs4YDki8bv1jqT9jD1CuvVv8Ty1nvQGpe4",
  "key20": "3grCaVtTCGUuEC2yoXBRGUejSfj7PjUJR2P6heWgK3pc2DbiwqgT2Hb9xdDLgDG9ijGKmUtwBRvVd4ZC1vkzGFxr",
  "key21": "PTWxASpjobRCw1wy5drSGCeWww9VUazx4y1vd1Wd1rmpWo31k39YSTF3BDKYZiv8ioz31Nh8qmsYSerDvVPYQdw",
  "key22": "3PdJanjBZ4DW3yz2oBM1thcnHkzkW1cGmVyBDzdn9dvkKieHCNbXegP72NUKFzydiMEqFLbroejYx7DnQLSkN38X",
  "key23": "3Rf36vWa4HUzeqKy1xy5YtMYdoPXMgDwVtQ4kH96bFLuxfCHCTc9h1ezydjdGD69xadv1Asj89i3qtLrbMvFUMFt",
  "key24": "2zSofPp2TR9rH23im8o3wpQ4z98jeHSdccZPrXxGdwU78mpU1AZLjkSpYpp7Btfno2f2xq26zuMsfgZu8CcYQUnH",
  "key25": "35xv29zUJqHjG4dPWKgxPRGXFyiacMjcJYhJHeFJpANx4uoa2SMTupjCoWhvamXnvBWJhQD2tTgPYw5VrDpNmJ1e",
  "key26": "34zd21VoFAHKbRMRs9o2smnLrV4QaLazEQD8nDYBVvQfBRbzxdg31upxScP3EZF7moREKdw5fvfFAxcH8XdgNQdS",
  "key27": "5dCBLcEgGg3D6LEr3QAL4yEqRjLGuZMpyB5ubNwJP74u74anpbWkk3qGWWq9oPLWh5QgCAnVgYJiWspt7J2WD1as"
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
