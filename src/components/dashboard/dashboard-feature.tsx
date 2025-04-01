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
    "keoeRVk1kCjdY4Gtn6EPR63VWMvua16zeNYzmVzcPQjxcpwCgCqfJeztETP5bCGuWiHyG4Ndcy4joFvRW8Micy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhKACBiDooy3vWvbzbtBnj3rAEenkX4vXqMJPBfE8emJ1wqqH2xhkDkp2VxfdNFHXDs2mkkytU8w8kWemFh6iDh",
  "key1": "3AyhwPKNkhkbNP9CrKHZx1Wdimyboesq1LBU9KnXEpAJh7e2dZ2CyeV7NVNQ4u1K4ehokJof3RmpWJ55BnLWT9FJ",
  "key2": "2SaXAkaWBohhmFaWP6JC6br1DAGQVMU6rHQP2zH6z8YuBJUFac618ga5CheSh6WWX6bA23qP8aoLobWAdeK3u4vy",
  "key3": "3mf7NUoFiA2BjyizNoUFVV2RskbHgbb2ZDMVLAtuf77XYFpfbwi6QTxLTVt1wHsVqHxL48zxLoKKuUL4hmBL8ezT",
  "key4": "K7jqPjw9M4JR9icWrwXzqkpmjHQ5Krykq65tEtxK7JisQNZyDwsk1N6YazB1AZVkpUtLw9bNVTtuMRZuhEh9Qmo",
  "key5": "5Bzn9bZVgbyrDAFmVtmTUnajfKW8c6pBn1sDX3CDXaW2Q186Ri1v8kS7rPtgDL4h1uHpWsxmko6qKu5PMsC5X3dm",
  "key6": "4hEju3GLmEs9PxZEbfmpvyKYjh1duCcydNZyZeEXmNFdLZr3tHEwEAvPpx94RvkAPHgwAGKJo1AbuYZkUtRPad1e",
  "key7": "Axpk1xToAcXHSTG5hKfdCHbdQY1fHhxq4pG26gMFnbwk9R3aFUVyFnTGgSCtTFYJP8QdBnrZ9qgPSoi4CRNGfMh",
  "key8": "GDiHKQdgHD3Ska4H2dD3D8pYR1mkcbUQedEBHLLUcwY4hw2AtQZruyNFmxAw3EpgzkdmHbstFGuExir6iEDaAFJ",
  "key9": "49NEEgBKHSyb8wk1Z7cWcKPU3r9BUhjt4sHBocFpWN5AkEmabsuBgCqwhLBDPppL5vtUqQ69NrkHjkMsDrojSnB6",
  "key10": "3DDTMUkXcbmFFc4ECn27c7B2pMZ1hXWjAn6U6wCDGyCC5Skw6vun76NGrwfsodhSw5bZQiT7hmATHbJNa3T5WWGb",
  "key11": "4twWeXpvhTN77yK1pajaGwRQzeZs5Zs67w1tutL55z6yMZPqDF1AmyWBz6WzShgfsFBUJG7fFJe5S5G8sAp5ktzu",
  "key12": "JxxNcYmnQoT1Spyw7YKezXqknAPSHHhs7VKBbVPokHpQqVdSE7BwSDh9TQbkkGvJozy7dZQLyUTua19a7fKWmqm",
  "key13": "4qpk1ayEeK9mwd8Ym7WMurEKtmQGb8iyn7KNVNtybNEAArfmVpcB9SZVAWT1jrKk7ARSSg6HYBTMcF9n4QS5CbTX",
  "key14": "38AzuHXpsvQdTKHX1gCVkM3WUsfgpcZzwzAAktNCzbqVgosnHnhPu4HQWCGFaGhSRxatBjZM78UUZ1F3oD5Pr6rd",
  "key15": "4VqBrYnSfWGXAKiwosJ6zaJBYWZE7QZotb7d6DQ6kQtQihPKeJdvGXmahHxfEJXYmh8G47GEXeXndaa2sQ8zZmjH",
  "key16": "4g21x4ptEUBhxjz6JRNTRt5E5TbHddEt9qEiBjaToD2BwNMKYUmqYics2J73GbAuHwfku4vCGCxw2nE6BUX9zJSb",
  "key17": "4dJGYEpwbQLDJjQEHw3HwXR6FuGCCjc3LLdAPs14wrpG6AyfX8453SNtqbWinUkCChcb7yb8PoA2AFpS1rL89uX3",
  "key18": "2ycoY8XDqzu2r9SA7mSERPkpa3H2NMFEz9v2sp4fQ4veeh8VnNYPZBAV8PEACUBvLo7zh43e36Q5MB6hxV4BDW6U",
  "key19": "5LYekZVjPn3CZ73WfrG55JrVZf5Xr7yfcT6R3aChgK8qVduLwSXkjHd6PBx6p1MRDEdatfaMwi45WNf4bQTWktmp",
  "key20": "123CrBCx1ePmFGB3HZExduFtd13MJqraRuJkRCiw9DL91e9CoydWzsqZAEBYLE5YxDVZhzcEHHTRckbB3EinKZm9",
  "key21": "3TFx5x9dPQQfLdTs4c4KYgRK7f42U3XsdhNCLfwCBfQAjncrqwUKpc9vMjKVF3JLCNgrQG7esJMtM2XeMWjkVSgW",
  "key22": "NmhFV3CfSPaYLzgYCkXBa3eVKyGFvk2KcBLL74QxYe6nKwS8y3cgaGoD6ZvL18f9Dm5xvLoui4kpGeozw1bsM1G",
  "key23": "4dXgo6eYTK89peexHADBcK6S3UYVjfxEXGP6qzTCJWDCm8fPdPA392QF75ctmtbt1Dwi2JBo4mvT8Zz89cMMEkHS",
  "key24": "2gzHBpUCGExeipvofisnwkEc5dETGxdrP3fJYZ38J6xjAK5NPvWnNF2oW1hLUvQBrMFeGGwAoBVXNwkakQ2PTaQJ",
  "key25": "3zvEa1TdGkvuZZuPnpC1vNprNfwDZX1B4uhgYKdrbPG2vokjLtq5oYahyj4Kt1jtkNVcrcG2MDrH2ybX7c9vfG6q",
  "key26": "2Vko9fProNMRMq88F8tG2bsypsCrZ9Fht43YaxuF8SbPDYxTUtmodbhGzrbunUiB5KGaXY3WZYGnvkwc99XSjMb1",
  "key27": "4qxsZxEwqJ1f73Fwet4prr2oCrjryvPRFmzSY3HZubqd9DM47aLgQ6pc2fqbck9C4QXY9AHSLXekmecBoW2vt525"
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
