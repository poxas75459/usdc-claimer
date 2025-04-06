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
    "q51yWuqVs3NbxNSBxKjCBpTCDewrt1Rtp3i1b6QSWhAtT1MbqPPiVhVZGr3c6BhsMzXS2vpHQBvpKwNZ5WWx3sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adKk5g57W32YQn1LgBAmpZs3biGpLTP9Az4JgYE9tznNVQr8uijnnrm3CxN25JxWuCDoDuhxcjrLtvJoN9xfiWb",
  "key1": "49Q7nNxQYJ6b8GswgjVZte961UxKjTkWWJNjzvXAnH7JyA2XDvo63prsP2uKawfyRBH62R5ZvvmS5J88ZdWzW8LE",
  "key2": "4GT4o7ZtewYzwURmMCNRWvf4niCiQ8Xgwkok8boARhpw6MPd164fbvEi5MeibNF49a9fKsE7kMrynFWVFkPBd4KU",
  "key3": "2NY7i3yaPorCDL54xpNiTbwH6VrAPVpUN7nWd9Ma5nXBPtPdA3GQzimP4C7bHYBufkwKYRNKzoYTqzPF4XmuphL5",
  "key4": "5FXmH1Hz4AxwttcvJJYL9R5xHE9h8dMysZnWRjrf8WvdLqcRAMGzLEWsYvuvTE6pXp2b5JvJwDgnRvs2wis6CWxB",
  "key5": "57zZnpjbZ2KvcJrUUMn9GeN3fudhC19nfQSPXwEcdKBLdhBzGuqXdFEXiUQ3KLchkjGQPUnXPRNMxZtwxqScgzrL",
  "key6": "2uUiVnAAZoGJGpCTVPGg8dEurfDbaXrR8fUXLKUctewq4AVPAWA5k4DDAxjZ2CR3UMgUBBFa6uRTw3ErByBuvM4y",
  "key7": "4uTmEATLJ35KeqnxtkNSX1PMBhg9BxPJ8QRok4Prv2ddY9wtimYuidmKd3gfXD8WB8NJ7TkWqP3A6LAShgEg4GJG",
  "key8": "63zFYfPkR78DLdxNRiPEEpGP1Ebgs78PRrAitZhBwqDxUB84tpzW4vanRc36uwAB3pL9qVS1edBpMg49E8KabB9q",
  "key9": "vSD4wC9iGEnn5yZvvrw4F6Gu9y8tJwUzFB4BAHsofwuSanXJmEnqM35WTF1p9LLtkBC6JjtuG91umaLtsvzpq5a",
  "key10": "3B9cdyMdyK5FsgKwpesRDbjRFtvC4XxNuK6C5YxWkmxCkiGn9zhxH2EvXT6TULV1LvhyyQTuUsbtjb2C2aFCX7L6",
  "key11": "2buNxz3rr8ocMDFbgxgVB9y9fbGj6mNZYmaSxE4Xi474LB8moY4GAB9FBodEoSbVBERJmH9uqEceBMhvqvaRVTQv",
  "key12": "5ZPtgrcpwPnJ6hGKbd48u7iXkFT5VX13aQus4onFkkyvq2ZkyhKY8E9FUunBDof9iGhqX7Y3pqTHobEYB84pJ1SV",
  "key13": "qLY1DbREo88ZTLVx2W5dRLizHZMqYuo3zuR2coQPCCXo74mt6Kn98Jmv7udVUqB8RBS1Uy8pEPoSU5Y8JNHuyrY",
  "key14": "26kmrtbrxyCAkRfJLjXh7s8dPaN9nuAtYvNw3D5Mun3aABEh2hW5rCJa8PwSctB1wcxKaGERLdGdHLmCcu6yx3iV",
  "key15": "6ZrDUkEa2c6GDSdAUgxefnUyojsvkd1cvueXsxR4Ph2Rtaww5nLoCwxujpkpNDeWxgSF15XenaVZn3QKKjHNStQ",
  "key16": "4q2eUCxBTXF4FaAmskRM9nyp2gmq4JwCLJALzYwhgDNFgxdfcjbYMiwPHK7Z6Uh2ki87wUxYv9FrHDecHEEVZTgq",
  "key17": "4ZMyppHpeankU2qA8q7bKnLTzY5TDvdTa8xt43RU3PyCMcaos6Ec3DL232mWRApu8GpA9wQoTMiHQGdZstToJ7f6",
  "key18": "5FhhFJSEJRForB7qeNsMGUVLxG8ZQVCTVXivBXw2Z3cYHpS2XyABwxAkSQDBTME98gCdxvSAUwrRSV7NjTJpJr2W",
  "key19": "nfRtmYmFcxk6BDvT5vePUyCbXn1fjwfF1VQUpfWZti9cgRBymj4AFioLvxuJSbc7cHAKaJKW1t4Sw1XzkDbQoNB",
  "key20": "5V2j66bzZPDHnRrMgqQkXD5nGKqtSFAiSSgiMAdswBKfzx8mAeF2YehTzbSLY6gNTnhTZDf4xTpZW2MeUjvGKozz",
  "key21": "5wiZGs63Q91FxJrayUoeZXGwtN1s1tcHiiV2k9pFg9vmGcv8wqQmLs6d9suV6jGUahawaRd9W6aptZXme5x9TYJg",
  "key22": "4LZvQaQ6hBKDwn3iRS4CBsREm6v7bHnZnhtJadPHYY3LNjxzCS583RA6WRE1PppXZEqBgzjT83a7FhurKnG3RQK7",
  "key23": "3f7LXC5obTWcxuf7f2vLE3kWKpCVximkcVpwfuNoxa4RcKjjdbtkwJpF9jJdRbmKYbNDonEQR6CnRxSwb8KXeZyi",
  "key24": "gYKmcKF43cPrhZhg7dQmcw56ejiYfCWwpzmZBhu4gATwB79NbAK5KsmrBSg8JxcX5ZJx7egNV7bpuBvMyQ5P2cW",
  "key25": "5VReVXr8D7y6ngyx3R3mgdZHBM9MXsau9bjvFMGD7bRNCiPGyWjYFxcN5d2suxKXsxDa7QRmSeAWaown3ocgsDWK",
  "key26": "3pLEJFf1gjMiV27aPd478ix4YmV9RMNvpmujwNzqZhAiKQxCE1nsk7nAPtzVdg3YSwNCwkrcMBceJvBRh7sMftXs",
  "key27": "5fhSbUnJQ9R8gvgqMxmx3XqeiBL2STgsaZk2jsVZYfGqeqbSMmV5ry2ZXbjwrsrcebrbkbUnDgDcAKw62boPZE9p",
  "key28": "618EDmpPG8hW8KxzVrfMU6yuRTpEXTs5vm1tKxvfnQ4EDqi2fs32J4U7JwGJDd77ExvjXs52ArAvoKh4Bz2DodRX",
  "key29": "4aiBw2HFsUZJBQytMp97qUEqshmfVw2HbNmw9FXhiEJkV24mtJcZZJeTNEs4Cogn6Ln3X29zb47J2Q4YoLx8aPFP",
  "key30": "4RYoruVTz8XRLSXWGRN5pVjnWn5qJzRNpasheFdGEHn3E7rKq5GpJpQRJoGec1fTUY6VgB8nYp4zccjRTTdEHqoH",
  "key31": "yw7gmeQNYygV4uhiQdE4gYDgTcrL59aUsrpWGNwmmqW5LYEr6u1Sn7XGf3i3mpsuxUvL6QABzQrvjbTbjZCYM4p",
  "key32": "2tbxG2qUUifnP1WiJrJeYN7YApVtbCzPYMfZ9mKwu6CSFxbcb15wv7K6TmLeWACeLibwKXfNXAZsomTJtQGpRk9J",
  "key33": "5wPtdouyP7df3NPQKYEmWNLtuh1dzwym9oP9mphiGsBHPfXHLNAfUK1utpAyySo5bvJee31kq5iiQ88RwRhnLdHg"
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
