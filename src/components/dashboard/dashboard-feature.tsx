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
    "2baP2y8r8YRes19DirTPctKetjdEhpjTRWYYw6bwxFWU2hSsHDdHkT1YSuEB1BCgGjjsVb8ZcGihfjhKA8TiHpcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BK1yL9nxrXbWt3vfVySw97CFWXiLHF7vezbGpubDVAziSKHgUapz6eGLRPujn2gAC6i7qCGfSk45SeVvpszheEn",
  "key1": "3pPr8c63z76aVzW4t1DiFQqJrnQTWugauYX1agmax2ipvLtURnoEcbidCDaDMGEa7TLmsgqZZKA4SsuPwuP9gw1T",
  "key2": "vnw4hKrAkvrt2imwqFz8mBNgXJ6fzUpHFM5QiQ7A5Cv9JhXEWFyWHbA7b43DLsQTr5rLiNExZrZWVqSuq62tr4F",
  "key3": "4YXATeKWjiuUFiu6cLQeSkdy2zoyVhEhz2msUyVfJur8Gw16q7jHH6tnqRrKfDKcKAL42jUorfRSuufCh7pQTRao",
  "key4": "2RxpdSFCrvsh1oSrewpeKbMT1EfkE27QKzaFghtknDW7yrstDjSzDgX5LhJMEM7iCkhnw7PpLYqMLsTz67n5eyVc",
  "key5": "KkhdmJpuZJ4nsDnYduXqTgFfXiuLHG2ktMjhgr6GWyqPcHXPhm7SCjjZEFY95Cwje2vM3pVQ4s65zNfYTZzr4sq",
  "key6": "3vKEV8DEW6SjTpUbcjHSjHXXUjz2fDSLkJnLRdUcLatTGXWCwQ4oYhZfq1BXg2FeX1qhMNSg4rseyMUhhD1J9QCk",
  "key7": "4hh5UJQc38VFUtK4XDund7d4ykEF5cLmEU8L1iNdrs5MPjfZLtP1vmmikENPGWsBAdNBMyCmEsG21tVdea5WzgEA",
  "key8": "2Re9uQGH7vtT52ENXj2H9MDKXZcWgtrNXsP1r2sfEMR8c6Cr4J24223hSXohb5jKpbnt6saonBLFezCRVmtap5xR",
  "key9": "4jGpMByhkcCuvgDVfRAjENg9ApRgpm2RTpfxrVC2512fnsDHoaS47t32Y8g2CLuqcDr1xTG5MRVVoomBJLyxjewB",
  "key10": "2AHGiqin3yoZgKeE5ksxkqajahpg7WZ2WbgDwsEy4K9W9hcTys7XNUfDxabVRYXPSNi9dNNZ986FgjpwCVofPAfT",
  "key11": "4hDaacHvXQ4nPmKbZ81QpsgAAzEbuCzpi8wyGcF2tbDg1yftNMZ15ybcFjUExLEteT7PYgdCjXrmCMBZkw8tHZNh",
  "key12": "vCbYZogio75s616ggLXsBxEwaXvNW2uujV2UHnGRbhSYFY1sRGw9sMdzAk1vSyzjd5hVndLTwYWTEVpddXnyvRt",
  "key13": "3HypBo17hVwFZBoB3puVLCqhkRP32R4t5N8z6iHXBYMp2uQfy3WM3RD5jec9mRh6oEH4K63WW3rKyuaWjTgqLor5",
  "key14": "5oJ171rEedBAeXqb1NoPJ51YzqdMMoyULAuFpZ7PbuiFdYdrLo8tRDBCM1EohkuiwxDoKNRxfZNvPsM2PGnAkHaG",
  "key15": "5DpJcZ2ghsnoD5c4FtbXCfaQAohxiY1o3CcqoGFenTxke4BatZUz5hqbUeQPN2pnDV8UyJ91ozTUVAWm1YNBMM2M",
  "key16": "5KT4r3CtFcUAu2YYLNa8sKfokmfre274WX2v9mZFRi6D3MMP3crZLXQynH8MsA1txapHjVHfcPe3tgTWw6jtMAiX",
  "key17": "51B1yHNKsqmhh3jrda1XkWJ5Ef8g6y9ogkipZ65i81KR3s27gMxi6UFenGEP7NAo3UmAJkmv958BMasNyHbdLMdx",
  "key18": "4NFqNzcV74WRY1vN7XBfbuEnZ5Rxg8GBTvvyGNcYcvk7cBBQVrz3NCogssJMmp9pFjtaP4FAkspDwhqiZ4MhaivX",
  "key19": "5FJQiu97qA3TDFGA6HksArPQYY2oBxoEWAK3RD34QWick9CNvj2ML694q2XD9FGt41RxoTGGuB5TTFxqdEN5WiMQ",
  "key20": "nveC4vka9ScpUpeAygiddFerbF1tZbxFyhQHQ3unssXrFDdGHAu4HxCfAPmMmaepLtYZe97VoBikaFRpsC1LQF8",
  "key21": "4LsfZFLTZB2RkQ9sPJyeoLjhN8PXQ9qdqVNDuSaUmMUPfBpwYLwcAXvcWJTJDU3uYCcUznNBcb56KSZpuJhTrDzp",
  "key22": "61Hewvptux5RFLZZzAYH1jJhPpBWj73e8DsmUZuNTu8nH8oboXePmHrZzFfbsRsU1ASreoXNZksPmZsXSDNDzk9E",
  "key23": "4tP7WqkTANmL5Vb1NV63Yn7jWwWNSiqamS1pfjwrHUGhjuVSq176mv3GYyLofsghAY1hNrHtSKqGYrQHZByASSoH",
  "key24": "4yzo2LhrTb3Gh9oz7JL9q9UWvAs4QVGgxMyTUKnZDhEya9TaQ7pxGaVPMGVhUvNZeEwpCQTE9FztvH2hAViu9eHt",
  "key25": "2p65KDa2Bazf3i7HoCTgwq1HFiyZvheaTsVm3LMPT6Mo4LFzwHvfQZDc51mqUUTmbywnoU43hxC2nLi4KNDcdDYs",
  "key26": "TeBm7Nmaa754gWUdrEKo6aXrsqceHYFUzYnfDY8yfrBXHH7eMgsM4PpfrXiP1uH9AvFmCbSCY5ZYEMQuyKdX24s",
  "key27": "3nh3SUzRtBfphizs8krr1FRaP2EUPhNAFygiXNxNRxTd1CXA15enmsDgXJxrJ1GUM8rq3y8CJZpwKHx2D1mVeJyh",
  "key28": "DW1HPxhnNAe8aJzsP5JYhqkeHkGBA46ocen4fpGHJXMcDyvPAMJ3ALSZ2xtx2GL4UnSgKChYzJPy2hEESfVQ15v",
  "key29": "58Va87Rtr3QX1VrRaGumYKd2jVGbTJAbDf1UNsuPpnfpa1c2C3QM1GL9L5ErDAWs3KS75a35ZL8rjedHY7Pebygj",
  "key30": "xssHNfBgeKxRaQoFZsD4S2F7hFVUB3kGSwzS4nZHkLuH7WEpa7ATB3Q4HAUe3SWQL1BvkoWb7m37kMnY1sM6mwT",
  "key31": "5vPp688FCqwtmSyFSC52Vx9kKovKCQUb86FYg3Jc3sPXzX32LJ28RaoZRn7Wm66Q6nGxZx7s95dyX54xPeo9S7Ex",
  "key32": "qWBYEciyGBNhhRz23sEyoKZfCAy22kcUqWDouBvAS8ghSaJBZhwfXmUJkrPqTNdXsw37DJKYUk42erJuvB7UQQF",
  "key33": "36WoBMfrvyxsdqFxbg6XxtdjTEKqE3Lu4vJconew6r3dxXMujAMyYicrpUSkCtT8kvc27jUkGgxcWg8sCZVxEV94",
  "key34": "3n7P2g46MtScSgymf6t9zmZJaBFfWdD1VhbSGTogq1srwDKBAVwDMwVmSGn9kEh7coiXzeYq62dHLSmSfem7GudJ",
  "key35": "28VZVMg9ze969NvfgiQcop9CnGEFLF7Pyk6PjWS1eXuQpVMRWKnQtqMBq31ZDp2qTkNMzWWEE3Gt5ELb6smSQXM2",
  "key36": "5V7tw1X2JjoiW1KY1o1A9xQek4QALHYvUZZPQy3Mw3v67dkPoiy1wAKkGv2XdCPaerRxuqSWd8ZjaU6j7tDC5Pk1",
  "key37": "3ipvFUv7vQGV8QUZb8NbkEeg4eMUmGgLz9NZEefhe17U7kBsBnHQfB7FaypRsEau6ttZaHzE3WokuHgyuxMoigo6",
  "key38": "28iPcZi7RtHB3tSgMAZtWZPMasn3j6F2w1V2B9ebfWj2xcRq55G73ht41e1Ng9XpRTcT1z8jjswuM75N3mueGrwz",
  "key39": "2F3hECATDxFGWQ4GH4sedkAX9BL4fVNcAU6kcRLJN9nTNN298sSLA95wibw7T7ZocVPHa3KavBheeGbBsAGHUJGV",
  "key40": "24sKxMD1w2MnCUP8Zg1dDVChFs5bRQ7Vh5Exrpt45e1TVCnyQT3zMVmbWsM5ed8GumJKczowLaosFk1TsxF2k8nw",
  "key41": "2vsYKGL7NazgaSMR71WmhP9LhWPRYAohHuMnj5Z4GQg1tjqtqfAJKJwGrQh4kE8pFtSLGFCpL1nYyyAfvRyRSMY1"
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
