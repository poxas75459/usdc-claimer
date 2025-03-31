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
    "22FZH1ut9twiGBmkdcuNZQeVvETZkoM3vgvdz6oaaKxCTW3nf5DCv4z2j4EcaJhafcyH1V8PNBw6VQPTyW6nwHz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpLqRGvrBb9r43297shVSibtDKchPvbywrcboYN4H7DavGa381AB3pTy9B1poqFsTQkdp9EQt5iosdE5GKj6jnD",
  "key1": "26bECkV1R1s4f6gBPzXbqXePpP8t8QRr9sdv95aPfKssXAck5cjcXm3c3ikkJikZYeVq2Y9EQyUH3kiVExggRpNx",
  "key2": "4R5bapS5vuu8cHZhYGD3kRFsj6WxQU15pfEE8qwNU97HiWkRmRAxTjYZZunw7fWfJKAy1LjsgoN64s5uGG6KuDUi",
  "key3": "2dzjSdiNp3jJxYzb6WNFv2NThkaq2oT9bwCakSW1YKGWgFvMuM9uL5T99TTZws9vuT5b2vyDmaXKJk9R67FpXZY2",
  "key4": "4eFjq64JXcHCcRqg9kXxLDE2qT3NLSHeHEyxgcugVxaydTorukssUeGxtsjLbN2gRmD3m4D5fk4VyH7aKsHk34D2",
  "key5": "FiBd4UNVYfHLwZRvjUiiMUKXnTTb9FNdvMYHMc9F2UTq3C5EUHCHLkAM15U1MxkNfDdJ2FoatmrocLKUFK6xi4W",
  "key6": "LngoZfyGpx3BVMBKaMyv5ornDwi23dnSrFv37ghnq2KBjWa51S2SypvWbdUSc2FKWhEmcH5rk1Kb1DoE6iTuNsj",
  "key7": "xKWLiwNEqBVVzEG9kgF1Rx8iyvWoxp9mUBJS4JvJwTWCzCAyVebRPdhqZ7iRg1vdQjYxX6R8av7df45GhLxaNk9",
  "key8": "5RrWzJBzSo828J3xuLSfkyuPed4hQ3kKU9mUxyK5ZxxWmdWVseaEQtd8ev6RminT3BurckCSJnq5ggWzH6Bx981w",
  "key9": "5ujctMYVnSzJmNRYyNSRc6Gxbrwp6rQt5fs7QvimbXTnyt5a76jJAJxipHPwQH81WuDRxSz9b5uK7Wjh8mrKinYb",
  "key10": "3xooGZNHP7jCcxsQsSkoHL8TbPJgQpU2WtJHD27tufpTPqHWxU2pFDQXXfHVtMgVLARDw2H3zwaxmoHb5n9SC3Rp",
  "key11": "2BFAYuqagiuyPKm9GFtgZs7LtqeVSTLBoUukRKRTyttc5SUWs81tsQoSzV3VQV7hLZG9AYCkbZU1DYm4tptCGMmX",
  "key12": "3DTau32yqwiD6QRVKb9y6AvqgVmm12qGGFzkrtLuKhVNgyfJSb1sB3ezvnyBxkCpzmxGjuH8DZja1AgN1y2JsnnP",
  "key13": "2fiz19udFRUcqaVt3PSsvJfGhiiNZHKe62gc8Ny3t9a3sMzTyS7RTRrAt1TsRE3iwXPfCJ9GAQmXTRtmZwRSuPaa",
  "key14": "3PQiEH3G142nS1AzyEjMZhNYRtJpRmPj2Cm5DKr5MiQTeWXLbwDgNeuNPg71mBYAcNq4nA6vGpPvNBY3KM6LD1qa",
  "key15": "b5FxTJFfuxLDr3NzrmMZk8ANXvVbE2mCSWXZwLbXNbuznyRunoHyTC3H8WDcDbCTuQPt3hQN6TJPUUVi79eDjyZ",
  "key16": "StAyKiqXcmo7H9F5Qeav7GGceNYNKEHqMMNu1HQFTXvTJT1qNNbykCnb1NdDVdwqsbgw7MTjqBNHoqP79gNxVRb",
  "key17": "25iUZBiZsjKGgBxkb2pnyE4coc6rPiYDxHDZuEF7rLoPJM1nkWtZ4yJEZBMdnf4guVRt19rd2UFu5H1cHUbREewh",
  "key18": "4cjwjBy5CzRBAMmN5ECoLL8gC1QHTMH9uMTQ3HmaUs9ACpbQNFo4sxuaY2U4tgTdKTBjXkKiKu5x2sANVwmvLtUK",
  "key19": "3CypdxK5x4g5Gqs6NTQWcWAbcT3c9RChuJNdpayTfbrYLq2PEu3Kb2YDN2BJqjKYog8V75jQDReiVPKnbqzzc3tj",
  "key20": "3JppjDUHehEMTDe3j3ndnqnsVCtZtLMhaJGLmgPwidYCoLm96h9AKQiVNEXfRxQBcWzPLYs5AWSD9QDuyWp4sXx5",
  "key21": "56AsQdn8583rzZ5CcuCwk3Ks3YqTtGS5ucDYFXCr5pnbwheqYheERvZ95cxaYqUCgt8MJ9ENFiaEGD5qkHRMV6ni",
  "key22": "BZoBXiJhBsyyj6DP4g1GeeoeMVSrDRgVtXom3GHcd8zSYXMxpu5AzEZNx81uVwhksEQZxa5uFEWS6MicPBn3VKF",
  "key23": "3upgwcJJJgEyfeLp3XvpUf3WPE4ZnAx4PCeVqJhkXmGMnrG24EFty9qo5Vi7uN66CMoPkb7LLQaikT6us1G7URjd",
  "key24": "5Q5PUUDeqHcTUARAqej4vQAjpfatHnMesZ56Pno8fdhUviPzem1SUWBBQF7RqS2yYLoiHauUpmiT49fniioiYXVK",
  "key25": "4zc4eD2eCkrj3aH2y6Ntn2P5LkSz2bzaRd26EyQ48RAr8PHBaihpJ2saL3G9e4LPcdfaqPwzhx4R88gX3Bdhm6Na",
  "key26": "3K14ybg8QGZPVtbcoev8TjtCnsSTF7aRyPfxgXuwiJ2nkfzAdEEaWENSszCbNcDBo9uEFbf4LpBdygqmmY4vWuqH",
  "key27": "p35SzoXjf1tdfubHysLXbwMrfzp66EhTk5GajaBD88B4DnZzgYKA3WUwxbLhaqu82oc2qh7pwnS96NxBJVwUMDb",
  "key28": "38Z9o4wX7jvBRhvdva94jZVaFgrunTBNW1jjWJE2iPYhf4ygUD8vRLuDh13QDFxAtqSYsVAai9Zy6ZXa4ZXyt43p",
  "key29": "3Tx7p3w5KzzTnVQoyGNHCQip1vfA9eoiqe4k2zjXEGgDCSTFrr8mq3FUX1d5sMLZPp5qqWSBy37nTu5uECM6ZMJ2",
  "key30": "34NZBXSgYQ3ShmXNffKGeDbFYxPaTgNdwTeH5iedqUfKzF4dVGnPxgGxDb29o7u7i5PebBN3d2jNqmVhMxmNLHLb",
  "key31": "4QM8zeM58k1p4VweaPNNJJCSFV9LSA3BL6x2hXCXCVDWftht28eSVrFoEQxVY1P6bM1nnsdKzpCr3vMHR29KHTfW"
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
