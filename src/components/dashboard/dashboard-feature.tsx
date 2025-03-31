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
    "32X6jbhzeUzk65EuiFPSJqjwj3JdSjMB14wCyLeAtfy9McpVYwvvHMKRM2i569uoRjmKwdxGnwKUX32N6hW8X5LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4nu9AwwR8cVQLppxR91xwcLckfMxpHKFbcYQoT3BbGK7CDsgReLkjnHX4EPLmnmXRuceyHtGfEszEjA8nYUbc5",
  "key1": "2K4gbH9AM5GkE4oDgbo9M7KeGDZ4PWzKa12puibnipzfFds9zuq4y6yuDq5UfVK8Go7wiZbikwjz9pJq8of1AdS7",
  "key2": "3nFswFZZeCieecDAFrG78jxSKS3PJoj3i6ZgGrhAYK4LeC1Xv14Cb5dTgZyrkfajUpTpot3V9v6vpZPcJg64ZFnY",
  "key3": "ubjMSziuTzqhJ2SyBuMdtc4vJp2UNWY9L3AVo5WkRCrcC6Fdm4EYfK5MZtrDbwc8LzijJFGCk9kbfdJfpu21cUV",
  "key4": "32SQ6Sg2e9rTPEKXTQTL7VcA5GSf6sA4RUUFp79y6B1nyVWCkpKJJFBPsk8R1CuBQxKTgQqqVEe2gYfLpR5XVdve",
  "key5": "65LEtA8Q3Sc7dgWD2E7Z5dMJ1z6kSAbJFgmmubQhHyYJUiWfvtUoRWdZ5gr2TorGWCPXmNpj1E3wahaSvsS1LG2w",
  "key6": "4Bzj5yTd7YUSZU8GzAbsCjfyom6io9bRBGkJvyc7uBJAie77SdRSnR5najobAo2ubyHoDWxpLKSdt4fxe1di7ep5",
  "key7": "4vX45GkNtbqmZSibkwTyJwALQoc2rY3ZZpsQkrq6dYAuMC1DpxbQqwfoPuBRSPocryPEfjJSXZ1EEZhTBjWS7Z79",
  "key8": "5zP2ZMR8wZghJcuF4kdK4w9a7JqThMvDDnoVWT7KAdhfqoYVwNNDsfRnUYCSGEPefXiQxbx35TcNF9JhWv9to8Zz",
  "key9": "4hZPGRKi1NZaJHRzpAa3kjJnbRxqK6TaRpxQB4LGVaNSiMfk56WeaXFrV9N7q6BJRwKjG54ci538cQEVt8J5PRYH",
  "key10": "SAPPP7a2CrVw8pqNHH4D7RiwuFVmWM3z69ZP2ReyGdCwEauxBzcEU9UdN3Z6y7dELt9QSsi24Tvom1Nf9JcB1JW",
  "key11": "K5131P5FhtTmKBh6uwjvVfXQWumQP3qLDVY5ieNq7H4AzWWfZVroXq6uQHJt2S8VCM1XwB5uBSD3hwZruD8R2PU",
  "key12": "2rF51VPeXS5e2hprLCvFB2wEwPGh5adTA6U4oYL4yG2gBmUzc2x2gCYLgvH22NV4qSgyTr3xLCkwX8ogGmvi2U2o",
  "key13": "2sHWxZqKHrWT1x96fe7LKJYJYb2VGiAkQLawYQ4THoDASZCmBxusar6iHKDAkQWaVNMEPUru2ULHDyKqhgHx5gC",
  "key14": "5kBrpyWivbYRFqcsVNcFuhkyDDRRX3Pb5EtGmfPCUFg9HsjcXNPPCvk5fJwU7KneNeZ9XeAJe1hV2KXFsTn5pxPH",
  "key15": "23A3chZpW8sobBUyLaeqReUJ67KCfinHHy7TngKGyxY9V3JYcGthQsPSk9KcAnDzP4BPA2c7ieoqwyHsR4kWRZpE",
  "key16": "5QLq37S7ca9Jd4RUcNnUpxoCNLvsgCBYpKR453NcyzgfVsodCAW4GZ4pGNDqamDkVrLqVdoFA9WPPL8T8THt1aia",
  "key17": "261AxHStyd3uuuT2rBMsCNoT7JjNesFZGX6seDsXMPiJdGU91mEN5AhQM6WEyguga1fv6GaEPixT5CWExLxipqsK",
  "key18": "3bNdbQNYZyERQHmYMWVB6HEiXgRRgZCgfnQgicVyPpkpqZM8NvZRxY8wWEKNvmYkfaFNJX8oZ5TWUAUfvGJLbHmw",
  "key19": "4k7qvqmxNpmQ5Q45bzUP7ybgKuZ5FzvFgCznraUMAMebsrFEHU77rhszAiM6Ybezvh9rrnEPLR1ppLgdKTPW4NDx",
  "key20": "3cfGtrVNaicnSPTPxH36qtgubFJGZgp1w6E1gZkksqLtbzoi7TKZmPAAFLCpjSBKZ9AekiAxHARPVyGuAafVnDtK",
  "key21": "3Ed7Rze3UVNaCJ9Fz4hTCKdLh6cy7eQ8KwQusZCGi22kUNepEDtAULsvvsBHXk8y4Az3qxW6BMcGyj74k2CzPU4D",
  "key22": "5BTPzk5rpYnfSGNmj5nZegoHCMV4Mn9bB4vxhqmwR85BVVGN3cSdMYCH6fUio4e6v3K7fwdSg3dVRi1xeqfpq3as",
  "key23": "FWY652mBPatd2cocdvys1fHbe1WG5fuxr63kenpprxJf6S4x984ZBLnHfj9RWaLqBWnRZtamHzTdR3XsR3B1NZR",
  "key24": "2YkkDzu48TnPYx5zZVo25e4S4k2pvgvH2pQuwFhTJchJPusr4VH8pi8tqh1vgEu66ZQXtseDwq4rBtFgD1CiLNHe",
  "key25": "wtXngpk2FNjkmXcxQBoMv9TVCCyeaYDcBf89eRjK7KEM3U6KgoLFgVAUNaBm1mpx7nKZUYpY2osBjjgap9uTNeN",
  "key26": "48JZUXeB6p8qcmcK3hfgpqRdf78K21Mnr3kmq4c5ygAMeomuKkH2e8zRSAndMNKfx9BQU54QrJKMcnsduxjjYVo3",
  "key27": "4pDKrJkkeVk7atwxduaPPiYoKPk2bM3xPWUJSzGH2VDJ41e15a3YEMA9rUAZC9n5JCoJvB9pVRh53KPBNLYeeFwu",
  "key28": "sqBoahLp5RQN9cbhwZUuyurX2GTxRbz1ctvWzsNhqxsuCmeD9XMYXrf7PiipSx8BmWrSnY1i7NyqeahH7GxLeFs"
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
