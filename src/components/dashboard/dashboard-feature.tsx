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
    "4fRaRca9zUymkVzmQtKdNTEg73YVAzQrmkjBSH1XJJX8XBjpmMQSeiPNXvdgL7KELcteeREY2F1Xp8nmuuu899z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZBzctKZnRHN6tcbyqnkn4eJxVK7KUNi7FDtSPhca5U5ewQ3TPmGUR8hL9cjdCcJtVygYWkpf3EMd92XGK2RgtZ",
  "key1": "2GFiN4GHXzoatAus5jkMw1r8xovFSWkw9j3pJNLmUyAHF6jppVJNorgBnVgKN7aYw1YE7KhWzAoWfUK2GAPow8h7",
  "key2": "yxoGhtFq4s4nb3PeEiRCW3sLhz9EpgoT8zCzyPtKpiAMCgz82pPztG7bNpPwioU3hmbHudNPHG6qvfNETH7kkER",
  "key3": "27XEr4VMtrVyTP1WxfUA5m1yAuSaBBBF4uPTd4d6B4LqhfRh24yfcr5wz8Rd2rab9t12T46RXuv9ngQkTt7SJ2Dn",
  "key4": "2Z7trn6igNjNPCVaNDvt5bAjymWkNWk7TAkYN3bYNADuULoKZMXw4ctvYKd6kn37KhqQwiADHjrWcAYRkD81FjMN",
  "key5": "3qMwced74ZFn4WtLaKVN2qUyJT3FvqidAM4C5z2WZFgSnaNjbgLmUZqF6ZkacA4eGtEDx4mU7S2b81gwdT3MiPap",
  "key6": "3LLH2MscLBLqU1cDcHsRH2KchBRzQgrHjmBHuKfXQikNguZ6zk6pEGjcJWYtdust2Vx7kDqcuzVFgEQ3BkauP8ZX",
  "key7": "2wXBBhbRsZuS6WU3C1Hoozxa5iQ1oLBSggw7XsrUQz1qJijTiiJ1tbKx8ZUULKgfaShcq1M2Sq2a27bMmhvmxXKS",
  "key8": "2Q8zmwveC6aByN6hm7G3bXBNJEQgbfsejXppoFMDW26hwRdg87mcBDMrFBTiaaANabW9gpHqKpzkREzccXRnNNxW",
  "key9": "4SVxRc4MGgpQNeo6QYKmLTM3M8PKj3vb4MLfwsHGoDDVAt18o8c2GXQbLdzAbBM1A4GyT71GqJqRM1mPVs7MCETg",
  "key10": "3Cnuvjn7qqcLJjYspWeRThuXvuVZ7qwSHSAF6kDdT2fc8neUKKUWRTukFodo9KtTJ6pygWkneDmc8KuvTYaxY65a",
  "key11": "5UvnBJVP2r1GAfCeq1ADQ1hYBWs2TaUKyvdAJHDkXczmE75WCakvxrvdGuKP2ZZHpeqrukcx2qUGF5rt1borotoT",
  "key12": "4iBgmeBdP1ZM9H4WpmFhjXX1hqtVtDvoK1i4XKp8ofZA8A2f6f6JibadN1NwTNYGcLr4b3juwc4VGNVsQeAfRVoX",
  "key13": "4vKaUbBteQFnPtkmE1VSSVBwrx1Yaq2N9w4sUkrotdhB3E7RdoF7JVj5hfiPWtaP83oPHSTf2jVY5gDGRpEA8gT3",
  "key14": "3pkCXCZJpx6wxdytipF8vUxyGiYBq3A4DGXGRPHkP9gha3sPLxaorsUqbgq1bq5Sh48v8ZQCD62iWk8Euc6xD696",
  "key15": "3cQaYyKewbiYvLFM5XgbiWXNFmr74sonvEA6aMq6ogQ24CUPRXrPWJ3wUGUibcgWPKL2rddwLFQ4KYYpmb7cD5uw",
  "key16": "4NPF9itGC6nhNoij8UtHyEbZYLBFAD5Rs9g6CBRTCYGr9NsBFkjs7qWFXvnHEKce2oHmEUbLmMPrdvEDfYYENuTZ",
  "key17": "3aLWPJTQxL3tgBr7wcLPsEtoYnp4iZMNkwXnTcqQ1dXPZtEF5XSCeo9AehS8gexhoFAj1VxjvFSHz75684ABXsaN",
  "key18": "4VYLCET2ewKt3ADppDDdkHZQvcN1ZzEbVSc2s4Tm7G1mASU2VxAzyVc6xw4ikYtEN8yJyWWiV7CqHrjp9fdU2wFr",
  "key19": "44VWeJH4BmutqMyiL2fTAZ4znJTh9NpaMS8BUMtjXK3GyoCfPEAkX1wi4Met1fd2UfDMqUec55Vs1Rgh93Fvx2wU",
  "key20": "5Cuj8qbrkHpXmssuWMDFpKY83T5ebQ6xq6K4DKP1EknzcTgAXAsfpmxBocpHyiNxzL6s815RGNvrMkQfZg89p7wU",
  "key21": "2u2JTtF3wJjSVjxYv2953iBbg9xkU2csxMeD7MoUGGZXRuy4ARJ77nRceVvg3iRbbfLuxB1JagNc413Jf2ybTXxR",
  "key22": "2hcizhX6z3oEHCquv9f6CsinDKSWRVnPVKvq73tWtGkyQJGTFvGkb7qTYMLV7bwhTvXQ66uZ1jAGUiL5kRhAtL1x",
  "key23": "4bST31V5QRx7W1YxwwbhQ81LRSyQDGjUjmXTofS3rQGkjJ7Avv7AAU9i8zHmC1VqZP6cDthLvfgj8gu1Z4E85hNP",
  "key24": "5E5jeW7teh8Y6hGfyJLsxkNJXCynLN2GuUBgygDSuKcsucLdcWg7Uyh71fzkqS4vX4LuL5hpwQ6eyMiha4TDXSYt",
  "key25": "2DSM8Zj6EBNZLGMaZHRXFqtPKzd4kXSBZt2ZjMCBM1yp8Ehrd98g1bwEc17ETzaAqQSxM6LoXMNpoobbLhD8cArv",
  "key26": "3sN5B8Hpxsn2kjbGKajSy72xaM74GwrEMzMsbCYZx1GnDDNwSKV8xyKEsZefDLGuMLLHJLqJbwfV7bJ3LJGAVKEc",
  "key27": "nZpf8p4fCs7SoDJn3VGp8Jskrd666ck6e4CCuprqVFFWy4tNj78f914DbQDvMN9LsSk8D1AUDqqaZRCjHejoqAa",
  "key28": "RQDNfb3KeLyAAz1Ebpzi3zB3SKb1ALQEGTA2Mkm2AR3zFSWqp3atPoeQGniL3QwhfLWb7UgGoFMjTo2krt26Tjd",
  "key29": "2pwJe8rBzmrdzXjUkVQoeZwQGoTkh3GThxTEmJ6pgZ5hu1ZUkHpy6bDF8rENamcQVRAfqnYKQwLhpNBJ6paeRzjS",
  "key30": "4GEBE9Zsvgaf6AnNdizCCxU1x1oBV11mRJZ6SNAzRENz9P4RAoNxE7NYm33kSuiHYYDyKXuS3LfPincQDMEBhDdG",
  "key31": "3rBDDcDVXe7R6sanZ282edS8WySSLFXufNmokd994JhbHe7eSAb8ECZpDkX4U1YgbNyNxtaVisjMdrTQEXEjDBV9",
  "key32": "5MWQEcye2cRuwSzZgTQaXzBxNhX4LJty6CGfnCRcDXmNr9nb4fnGU7iwKFCJCF1QXqGSK7Zz7NBPZd7vFygbdxNz",
  "key33": "2zcPtnWH25XrPbbwHiVtXa2F7deV4AHNEhtV5Jrakxv5fcegNnJsZnam9XdqdxJNabkMVjJ5suc9hKBWR9JXKNYj",
  "key34": "tKgSngMXr5ryRDUTLEs1crTYToF83r1FVg7aVK3rWbTC7N8eyuiwhAbFp2bgrsXU9Akzm4YdzL5KTFzwbbbDUgT",
  "key35": "29wDwVjdhHsQN75o7ydq2JxvbBQwU3LH5W484GhziUQZeix4rGunXMKtU2Bcp8EfCMQb3G4M21QP3PymrA9c2DSd",
  "key36": "3SMkYEPSpThqAC5oQGeop7nSrvhuupz5UcWKXCBkyYqTCVk5DjwZyodRxui7CEDzVMCuLkx7xspYk4bWF93WRAUE",
  "key37": "5JtDWoRQmi9km4sZXRkU4EXkzryweMZgee1QsmxeAFdncB13US8X3xm124abDzXEzMHCdMc8rk6Q1XnsLL63wcEb"
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
