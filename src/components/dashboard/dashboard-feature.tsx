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
    "4f7UcwYwaatxpRJC1zBPjaHtFvP38w8FqPg8edKVgfjgakWWd8ovwG1LzTVRP2MBj4G9vAiYDnLo3hbHvB95N3kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Gqaf6ytLwjv9a4RJGe6fXq6sGFDBTwYshS41RXSHWEVjQNLeiAm2rzQFy6pkmXNSvUvVRHJpdPTQqLjRbDujxs",
  "key1": "YFoykP2NoYK7cDU7vbvbTdZm3QuHac9WdB3WrTTRPsdsgJ7U8PJKEx37UKHaAtDuCQMDjvHh1EKV3ph6ssFMJn4",
  "key2": "5paw6c5yAWEQdjH93cwp2G2q5t2b8mi5EC7v1nFEFxupHU32nf8gXPxDoRRcQatq2vU4ok8NjcoeaE1uHfVsNKsY",
  "key3": "3578XWevRZjsy2LXhPmSjMnMPnVRSaAcij3mHUZRrrQF3SwiAYzQe2pCUVhirRBeYAdiy3KGNEwGAWxAP7FoFCbT",
  "key4": "7UVuC1yXP2JcAL1j13JsLVjaiVVM7n4uZ5Epd4c7xBUUzNCCnkPVCVupKPCXRUJgqQMVbEfaXwducWHPyji9eRi",
  "key5": "5SVnvaHNFGvru6V8wKe9nQrYiw34biFFqpGQP2586A7Nfi3KCBz3MNG5Gfub3F371tvvtmNjdiog4HSd1VFMkmYU",
  "key6": "3svL7wHG9fB8cNA7axKR9rUUq5tU1fAPgyC7sm2ZqeheefhzHgrsJFqkr2LyAYwK9ZUoNtKh32rcA8o76Mr4G3GX",
  "key7": "sXhctRcUU1hL7Wc28Rp4nxKfGTPJ7ahxLVmKrjWaEJkXPsxtaGTSMetu4Kr6WtPqjeWVpZZpYCbeBE3cpkja7cc",
  "key8": "3RTsyR4WCnWZTtSPYiB8Cz8MjABLQJ4WLWq1Qik811vWNM1RTwjAea2r11sCTNpUpFbfS2Km2fGbktBTj791S1ic",
  "key9": "3sMMW5wVJBxwJSE3d2zeyJHuN5AoXaUWZWmRSxbPUJhCVKbYoEL4KeyNdiU1y4LcFhxeAeixvupMzDyrDJxm3tye",
  "key10": "22jdjBQG3jv1iEKgtSTnQJ1pjWGB6Fnf5wALXnnVt1VCnc72eRZfrAEhqSUQWteJEJVDcWumxkzz5u7EGCqKf3KC",
  "key11": "5LH6JZG6QC21pcxkhPFcQu38wiPA2Me3AQNZ8VeePwLyhd4Dy6b1dr5aXpq32vSDMrsMHewfCj97i7FYx8RJkmBa",
  "key12": "46uTKC7WReDsZZgjdHdpBVcDEH9uRVMfGGtNMdNoszbsKNq69YdR2hcKTuthUMvnPsHzSusuRVrbKeHFVj6pT4RN",
  "key13": "47DXK8wqavxmjR6ZKTwouRoQ1mtABaLygta5KMCQwBQhEvvXptP3gLRNm9iXzfKCmT2k8RHhwP9PXAiRXeFc8Rbh",
  "key14": "5CQgou4gKUfdud1SgWHBebSKAnHZbUAJMXXY48EW4rToavE2gNxcWrqx7TNdTovmDMzzM9AQ5SBUaVHpnTjWCzyh",
  "key15": "2tt1gvtMJZYbxJeZZd7zCg4SDrNBb9QNsSWtDzBiKW8DA2RU88Rf2QJY1so59LyVg8X3K3zLpM3EbAY8EsjLSBi9",
  "key16": "4AY9NtJwQrCeDqvDXHoteqAounyD676986BPFgn4FmLs1m35Y3dScaG4RtFtmqGGKJSe4H48pSjSY35qCmLgjBc5",
  "key17": "55h1ZskE8BuV6yhnZmG6n6iFgdVzYAJjCiNaYqRVB1TSRHQ3f5iwEGmpfrchXh3DfsA2KpJhXK5C9xiuB26ZgpQk",
  "key18": "ghLdF1MG2kCTBBtK2mddLdicwhqWEeFFm7e1UdD7MVqL5ZRsmGg21CR4WiUSUuSmMCkWU3yHFyp4m3FWCthjbDe",
  "key19": "Hoe5SoT2eLRYWugmMq5WLwJ2Z7zPLHKkq37eR473v79amVXJ2phKXYgAacysUq97T6nuJXQEQanVSq9JWGWR6Wr",
  "key20": "2iZjJL42EThWn11HLQjRyoe7pPuTu4c516dkigjSGuLWh729kYEsrTLeK9c3afiF97EQc7xURPuqt2gz9tCMQRu7",
  "key21": "4dBTYQAuv193LUWGverXpT8WpWXBMBAuJ9FkHw9h5pAQX7fEBZcbmJy1rTMpRDgLh6hLa4tMwWVtA7DeY8WcA7Ln",
  "key22": "CFpCRQyvCQRNx2b2hZAWdwVdGS99Tc2LQTjWFhB3cNM8UKKe11DgTEfpgPxzxabbSxHU18dpRqJodTQaY7MJCao",
  "key23": "4mh9g8vW8abca2vBUrqTrHCmsvEx1eq794eBAQngqVimqsPc2S3nZofdLHsUNqS1sewCChqsDpntiEnHmTzpZJKJ",
  "key24": "3gYXjyQUnkqYan9eYYKSuXtJR6rsyD22rsvVU1Li398TNazqdiEZUR6NMATBpNUJ81kSKEkGT1ufvWxy3boCnXwi",
  "key25": "5DNsWb8k2PZN48K4SMEPwZ6XCVvP6HGShbFR9a9V8NeGjaxybtM4ejLgXhM48tX8AtP2TPJpFph6KRn7guVmbby3",
  "key26": "3tEZgQsQSBWsKgkDAQaN8rt7aqn4KnUuPmNkpRQgdzYrFVthmcuPJ5RpXr62yhFg6pr8VD75H9ik4GoioAmUxqkf",
  "key27": "Eybx3yCShEMSs1BMKAzfX3NMswSxpvshXcffBiCHgu934UGe9fzTFzsi6pGp7bZXggPPzKpTWhNTxBAXR4iXbTf",
  "key28": "5RRNiJXScx29nUEpRFv4W3dBMUSsAxmisGhWVaESgSyxXNyDKbWhTxoNWgo6ZdKCGNFKnZR3AqvmXxbkn9afKxpn",
  "key29": "3XnRTCFVZG7TKXSzMCHEWyVTbSFTG5z4oZ8dMqQwgottegBNLkQe95ifQUhMk1iC2CuEaxQ56WnDFCNrnsbqHXWQ",
  "key30": "5j2XiqAP4V6fMJxZ49d5DZuH6pRHm78qSws9GKExC21szDbbTQdy7BfxCxwqfof1T3cTmW179gaB95ewaorK5YrE",
  "key31": "44AYDtWGM7htoS9agzH9KvvcZiuoXRUCFdwaGsPGhkkMYMGXsuG1j4zQekRLceSxDEzsiEmZ2QiJkMek38NqHBXC",
  "key32": "5MahYoKzfSGbF2RgYnF5v6HRMAvKGrbYvUm3WQwS5MeBDZQqLKdDYbGayFSgeKPnkETHD7eXJjtau5EGryzudRUr",
  "key33": "3xuhUzmXpjAzDomr9APgPnYKa9WGnQ2eGn3pB3LnewEZZ9b4YrJ98MyfykGM2HAhwvUKYG9ETGK1oGkbNuNSAsT9",
  "key34": "5WFExw2xgpVhLVDizqkYLsiz5m4CMkSw5uRHCzFcRawUoyLRAPcp8SHn5A7ftMVWY5UWNCym1NmYmj8oAEiVBcbb",
  "key35": "2oMh2aAeDa5xYEW2H4ALZZrM7v7EPoemT5xTbVgwJGR24LthvtMMeAhdDYqyfaTeen67VRLSxP4jAM1a2h5WTHyh",
  "key36": "4Yz1vNim68u9isfLpXt6SMbqBZxYUXQ7unePkKJNhPfQ2hXvEZLn4TmUf899cj48G7fBQqPSBAGyCcrNJhwfriyq",
  "key37": "2VDRwcw3tNjMhDdbKR1Wyer7nPxWyJrSsd7PkP6H1KjgSw7EAFNnrNUeq3yMWBi5YU2WHZMZEkJUuGRkZrNV46kM",
  "key38": "8MP4RsB7UrMLa547DdXj8msprz9znoNpeqQzaK2m3XLHTtCeReCGNA8LRtEzUBiUSz49bRXDUjYR6E4qhtWr2tX",
  "key39": "2EBVSQ9V5NBxZ8cENwhPUgV7htwJbk8Sc9Cgyb2sJoQGXF6iK7McjZ6h5eH3igGXPYYH1PHCMsVvcDV9fuK9kJaw",
  "key40": "38VT8BcSHxvNKMvSqFRUpA12TYv9VHf8ibWZxmB6eLDsDe9wr5LNDNf3H7XETYPfn6e8WssZjZmewhXZwrpNA6Bp",
  "key41": "9T3TzfJ8TYJQXZseX8CYVrq3EZyj6Zs9AJs9XDj3TmCUZ3BXEUWsFAkMTJu81duELMuwLufQHLHCqnDg71rJJaS"
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
