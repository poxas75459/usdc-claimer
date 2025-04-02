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
    "6duDNdBZ8JCTsVuhJw2dLap5LyccVhGfw5YdPXdjunL4cbRhHoMZpmerZ5sguPfGpFT6f86HKTNqizhyJW296ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XutUzL7FJdY7SbaDfcJZaok8Gy3PhVwxyR447eRq2ywrzXRFp6UgTtxeuZgmTPnS6nbaZYTr3QbHByp6MdciXg",
  "key1": "3eWvhZMTM2usR1PMhhxJLpan4BMCozSB1BwRiMix573VQjzJYf3yDbjxJTCCb7bmkx7VLhbVXhnqoS5V4UnFsXPb",
  "key2": "4h64FyPooqcUQWibcaGY8n1J8y5tCxy1MrRQdsiXxWThDFpa6rypdSc3nHZLT1YosRGJT76MpnezJi19DV2ZGeJj",
  "key3": "2L1eAtK5VUys4QgLjAvkTvKkNfNfxHCAuXyCD7NRknpiqRB6bS5KQz5U15kDiqiAcWd741U9QhswMk45fCMcM3nK",
  "key4": "48MqNMkUKr3BcuySY7iogyhhwsEXtHdYAViuYmopHUSSzo2hH3DNt59tGqUpAXJUT2vNiWcNBMFcokU7MukdbEJ5",
  "key5": "3KnELYyqTFgFdkZ2KzcChUeR5HreE1MQUyZ8zMx9dcydh3toTyrbr8rxH2kEufZgmu8ZibcxrZugE4asLxEt4C6d",
  "key6": "3UCerG6rQp8S1yE5Uvozgm89k2ghemnkGKEP6hXEnCErVG3bqdCeDah4DZpA335gYXGJoSjYNncGDuyCm2CAPyJr",
  "key7": "4k7tBHEZUWfSSxZYYdS1QZATwoX7CZZj9qbToiFrFcK5yYTrLqbRDsheSWSWka9xTRDP6wrt33HLLtYqR5oKTdkB",
  "key8": "FxGgva2kVycjWfXSszgERYBDSJKTRQx2Nr7sTXU8NqGuiuhbA8S31RVp3tsKKwPiJK2i7nkGCQNju56WXwAz89b",
  "key9": "5LmaueGs2DMRPw2xZd2kZZQW3xc8NExHvXeUW4y5c3Lco4QgWwffJkLs1zTF6MLsSq7e4XrMnzBWsEDKPEWJC4xR",
  "key10": "36LNNtomUpKV2GBxqv1YEyvb5yuAs5F3mvC1igxK5pNrUFzn4cXffEUiRzK25dnUuMectypt6UxHcaqXRNFWyGEQ",
  "key11": "4CPrEweZFYfkt85SWa6w9iL5rBjHv1ZKZDtJbcQ5xAvEM3Kukk8Uu6BNfQxEj9YkZrQdN3QmmM7Px1fKhX5VeEZ2",
  "key12": "2YrcKXspDcwCNmDHuWjXcXz7f2Z1EPMfqoXPyQdbQ8Hnw1KsTSeghMJvy3ajg6Q47eYhZxWxaojHorV6vaQUALkW",
  "key13": "5XMbt1Z5anpS7NbhVbKic9ARpxe1cV7W5gV2qzo4pxaEZrgZKkGopYAQNHqHMAnZqiMJ6cdx9sA3QRNWXXQDt5fH",
  "key14": "95HNcTkUMZYJqEGnUvwzmhHz14yn9FEAHzpsHR5RSNSffCqKCP4MogZNXddx8ppxEwCycvtAXuQGiPK98EkiDMq",
  "key15": "5ZCMMQBdmYf6yJXkQr9kkUfAhsuiY2pzYqLBUDD7sjtzgEfY2EdTnDE7GQ1xunqvZxJox4veSrpbifLXaFR93n23",
  "key16": "TDbgksrF9rTFnsCQAPRHJgvWaZymmrzjY8Rk8q3PPK5yyUoh1UNutH4JoZC9VJ9GmEqgag72kNK3zHSpyApRrzs",
  "key17": "2qk3xjCczc1aM13yZVvyNmkcFF7c5vanwAmsQcWnoQ23EyGsrUMdcAMtSvmSs63B7vRzUgpGfQYd7iD6B4dEQ1qM",
  "key18": "4micw2kWgJR1Px9cJU4SuXy2SnneNXzT9yCYebYWj4ysWXdDCpa9vkexRiycfE3hkeLSe6HxdGD6uekgWxUvCp9R",
  "key19": "55FZY8jYAE3HBC9vSpoCbW3feft91qrk7iEpGPiy6o1iMXgQADcpkh6BzNb1RXpWF31vx53ZaEPhGeBeqyg7kzpP",
  "key20": "3gD4CmmSGJ6PHDYdE6FSs8MRXJVJJ6xAdBNF8wyrgJ4wLhWxfgrbQx1nLUX5N9Qwmmn7YXL3rDLaw2vtsZNxdj2c",
  "key21": "464VmSPHWoC7HXVKXHg43YV67AEQWNNVLZyLvKkPHRLvwbsAjb1aS1SBgWr7PmFoPLJ7d65cBKpo4TN7ikaJVhRZ",
  "key22": "5jK8FQ6TWH5ErAqt1y4Bwsc4mj1g7ma832ZzjS6FbdHbgmMrapaYCA52EAUbec44wb6JSTw3xZae8PQZT6QY1pEd",
  "key23": "3QmHMWmqEcriLcuR7hbn7sJtsp4N1cztFJ9dSFDsaDxw2Aw8GNu5Y3Meqhjepp5Z9oXaezDBQuKqT2L6FGsxtejz",
  "key24": "9aMSbXLqrMDVg3gFSzPTnpRFsqoCnkNWZcZjYLUBTQg3WibDzsT9vfoQ64aS615zJDscwkhXhdoeQest5XTAY3f",
  "key25": "d8NiYu6TYGJ9HSnoSeqewdKqfF6fWgTynd1aHucTkAsU63yY6ogxV5LUb6GL2527N1EDAd3b1Kktbs6mTokKBfF",
  "key26": "4Ne56D1T89wJjKvf9PYUu4omod4UnwF8134LNcF5eZCmuNNXTXssXiAc4XMYiv4kaFPo7Q9dfQ7BTSAZVSn23fNZ",
  "key27": "65RNeLNa3rdHvbaHoEYhGGWEk3VSA9mE6voWRjuzTeZsQrhrDphYpNTjdaEPVv5qzt9VXmgUYQMbYWrVYuKa6TNQ",
  "key28": "pMXjQtjtmmZvXwgAYoCH1shm956Ws7nGw6zVA9CD1x4Kp7hWZirmhCnyF8fnAwW6odpwfsUNa2E7oHo1UtpRJaW",
  "key29": "59jJDWJXUzLoJr9bV8aVZrtvqi1sWMJckmWYx7iiMiB6jN7TGBGVGJ3Tq3DWqDeNrQepkvLjrdXFq275QiznrGiw",
  "key30": "5653uKe9vWwHdsYo9BEc2cLRQ8o2B8QQxds7pjqnc1Toap4613TYipMuH784XpfAfPpm8vXEqZ3oi5zwYFVcnKhJ",
  "key31": "348j8662kWKomFJrjn3LftiBRko5MVc8XKcXQNRGwBXEVU7iDkasttwqhRctVBmnJ5w4AGQbL2sdWcxNVcJ9d6MA"
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
