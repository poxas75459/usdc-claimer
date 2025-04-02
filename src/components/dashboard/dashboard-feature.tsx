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
    "121Y4aFTBs2791sEhYgqxLE3mSAgrHnk7CFbAiXMooYR9WEpawn98B5jiatw5bWgnnfbunHv71t3QWg7m5HNohNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9GtSL5TNenzKAacB1TfmaiRFRKYyZwGsNtWsuEgEBQUM3ERwo85Kuwb749pqFtTcWN2b4CBYY1X4nSMvmLKxsL",
  "key1": "4CcKgxGGgGLGNFWMc4KWk1BtECoSP4hAgAdGg4Qcgk7EjPCmk642kKrMnaVSy1h1JoZLoi5a2RUpGWqXUf13Sttc",
  "key2": "2WF1ywoLSePrGMeh2CHJttbhF4T3witcBG8TMTZwAN8jgGgQZ2PtPRUtv4GAu4NEb6krE9KafAidGF8pyhGBPVkK",
  "key3": "KuP65D5UR7LCyh3ZKa8rZqWnRsxToE97nWAuwiDLvgcN7bcqKie8yDE1TqbkJwEnsb4QQBe5Bf3bR9YWCDJRveD",
  "key4": "517tzsoqGtWtQrvRKmzdTysRHRbaRtiGcRQzbsha2b8wcDriLtZdk9KRjn1mBRvJ3vRnGWpuTK4g1yMKPXNaXXUZ",
  "key5": "3b2A6dnEQuyadYJdXUcXNxKqYH4Cgz8XAUnBXAoPPiEvLMHGUp8BsSnotfvNPg2cd18nd3dw3WP9X5fDK2wLKeZm",
  "key6": "fy1fhTMua8QVXSr2f1y2qZnjUbawK3oimwTwGfx35NsQDjLvGrVxdkyqNPo7fTKjx9jKJSBKRG7Am1zs7Zzy6Ai",
  "key7": "3P6HfcowFFDBHAWdGd1tX6KuA8bmANGkEymmneEQqUeS5M4LLhM3rbSVENKMVFNZ9vqrZn2DqGCLvUFmwRZ7BR73",
  "key8": "46ywnAWWb8HJLeKUqpvnoYbhbQN6MWmhabwxEhdXKW3qdL7k6bMaoeHaM3trntyHFtktQZDMvx8zFuwmRVYkK9oe",
  "key9": "3bhQ9TdkzmGDUeiAZdcDudde3DgcN8BStXkoz3D94AbCaz7PMZZ1rQYepYhKGMK5XdcjQnLGtBGxT6LLWgXKKSdg",
  "key10": "5DoSaAHLunXD4yWNWTDBub3SGG2pgvzS8B4RLu346x8c7EwCFGgpoGyybtYccpbBMEzT78c6mxd5EJPovSESHicY",
  "key11": "5ha3WkKGqDCb3NHAQzNUe2xzLdXni6c3KWMUnxL3V3jEcMmuFDU2Mb3qBbVpmyiGwF6aPZiEJCnw44Epdv6ZMQGE",
  "key12": "2xp98Ak8nCAiFV4vTb7bGQ5rgAaj7smD7CwRsri8wXhe6sKunjgdCAFSvDHo1mVzMuJhNHXUYoFeqB4DqSbrwYoK",
  "key13": "29chJi7rL441S7ZmQEqZrdyVxFQSrbmggwK8Kq64Se2xYna2vBTQD6x6L2vwG69T8NhWS8imKCENXR6unGPMBy4B",
  "key14": "7tMAvgkR4nEYPMopFCKiK4BaNXviFSxq5BjrUd9mSzYosPXa2ghoLJqxGt2Mpfjd2J2Ar9qCsBRHhwjfu5uU9qn",
  "key15": "22atjeWXG93RPiLAzd34Fh55W5VVRQorfy5V6Ro2ioPpugbBCMKNMtkeXp1EAh51xR5mhvmzVanQBcBR2psbZwWx",
  "key16": "3EQK4vveCDKhdu6MEmGR8PCwUFoyPAhXBhSToxzWFmKaHGnSyJLbMwpFMezMy2zyqsSKj7RB6CAERCc75ENccKRE",
  "key17": "33D6MtCMe3i9GxTskTGkB5Sj19kwNyfnDMg1TeaYxE3k6HL3M785qrANHupjeWSs4c3QPKk1GEomX7YRgwsSs2H6",
  "key18": "27fnMFR4YXu9cQjEfUS6iKHSsfG2UH8eVmmvw2SmxKggvabxw6HamLKmPJQ9tmWNDnGrDzZb3QR5Aoo2tvyz2E9Q",
  "key19": "2s68AibYD8VsrHaREFTEYwLmz9j897XxEQ4wm54NP5BCv2XW1duHMCrSqW3N2tg1wbtRKBiMamb5PKaggjva2FsY",
  "key20": "2sKuX9VZxQLoTCrijHj9U7bK6HAMtcCT929Qyt4dKHtwnJkUgKwjjTYF3wo42cPgSu1MpTm7u7JdHAmMcNh32dXs",
  "key21": "2Bso5vyWdp2P4799LTbCi9uj6unt2tNLvGck1h37FzNc5XEs7Mq48BfEVHqnMy2GAyTA8F8gJCsgHaX5pGPG7E3t",
  "key22": "299yxDRgdoQ1XtjRgthZpeooTE3gsd3hrJtCYfK3hQQGezn9TdB2RQfELS2VyGnPqo3YDvFGQEnkh2NNaaQHtdZh",
  "key23": "3eaT7QrkeY95snRu5dbirD9JCP3RiawykRxJXsgVMFZC6B8rzbPwCbQJboQcwqDDr2voFznQPzPR2x61BBBJLHCs",
  "key24": "48MHPv8VvdZW7UNrfFkrMu4roSpXDFrbDHuDAshnu4HZyP88m5sfh69nuPL5iQ6fdphSj4Hn3ZWQnjQE4A5pgg3r",
  "key25": "3R8q1Bhd9k9T4D92yUCWcg9brzvGaz2XzMpog2EVCmmRFqLsDCicweh7mRV6Jcdmaqv58csqAHWB8uh5KvpDUWyL",
  "key26": "5QXj3oZhQ1R9W2a1F9h1FtuRUGm4f7XWraCNYBRimkxreWKj3JFpg9ZGXNy69HBpQRsQHsicikoW7GtMiUtdiWZU",
  "key27": "3CUmDGJubghXgd6TKBWFCcP4dsMN8YgwFtPziPdNgU7NQQeFMSoRwK5KFTYKvEB7f42ztxvozqVugRRzsRcoxtvk",
  "key28": "3zsfadBp5bQjyfaeK4yqiyszc8nmCCTu9XhVs2KxhkyHAhDyJFxpdgtsR9B4taTymvrTSN3sEXF7r9MTyc8tiEh5",
  "key29": "4NbWpk3afqREFKp9WFjLkuCrobYt92Pe2HRYwgCZpPUasQ8u95ctbZdStem7Tzi4TudVdkpxxbfECZKDRsk2peRH",
  "key30": "2XSdYti6FK6H8xDHLY2vpvjzY23NUZ8setuMTBNyaELpu2rpptV962LNUtXfAheFyiiDx71jc5uPKCEp7EgU6M1t"
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
