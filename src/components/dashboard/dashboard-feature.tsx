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
    "t5pintsvVF766oitGUSMmtThxPDCTQ3J4pN8sGVW4Bri5vfZPJ45v7VEHmfGkDYuxPspdCif3g6Z3hmgjSCX2yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ds94TrmzACRkTdMgVoXeL243n944L5PaFcbpRWdvKpHM1pHB82XqqYKNP4H3kQk7sPuJZUhfyWPxTbR6JbP25La",
  "key1": "2pcpgnhNTFQtTSaCGcXwAivKEokwsgK39SWFqDKWToGAtYr7qDiKe59yYMCkoMEeUfqUxyuYvJW5CxpdtV1SMKQ",
  "key2": "4KQGJ7Z7cruTfWW2nEojCp4dhppEfBHFseCW6Xqjkf6MS8dQ3eSBPrkGrz1ZcQcX1uv41ZVqk2RPHNvN7C2ur3Sb",
  "key3": "4nAoyV7xvTFhFfnBSEQ9kHgemyjnNbrPE14L7qGsCRpQ9Axzef3cGGN1tD8WGhW3jQTCU2P1wY1bg6Ydtic5zYTw",
  "key4": "27yV99d1bY4hNea2bFNoVykjo1r9Mr5qzKBcBEKFai1k296Zq9wBTJbvx9XULoF98XiKAEhNGfMLnbUZAXFfFNi5",
  "key5": "4Pa12BHPD7PqP9EkVmodAyCtjFiiA2baegzHCJGtG4Tm4B43cQagY8bK8BGKri7rS847xjnPnh9Vz216PCN6QT2",
  "key6": "3xUSbakiNB1LoGf6UV9pmxJCXMC7R68iahWmxuXRsCCPCSxNg4RyYn49LcfjV6NSgyr36YiC1e2TdmbnjWQESm3E",
  "key7": "5DTG8oivSqsqQThpc8R486AzP3AxbiLWDA3HvGxji94CduhDE6GnvuPXZpGkvnKGPu37ZRXshgo3ZMmTUwn6D16M",
  "key8": "65eUabAXQ62aiDynHG9vZ6sJeMLT6G6BzQ17zY7wWmNiC6v9GUmQJBLsmp3Sk8kSkt2A56onoQ75eyzwessNHPhy",
  "key9": "224ZrcndRhiSkGLNXzxTUminCPrPoaU9wyHYHJMoqLvBhqsMtXCY7ETWc77oh2Jw6KqNhKm6WifjJuXMyvtnLUGQ",
  "key10": "49ic7vGpuMJWWYV47U9cNiju3wKy4uz8qxWwBdEcT1oYZAyskD9aPwzatNA9jMRZfMMRacetc7tGpTrbof2k5tVT",
  "key11": "4ErtCPrwUkCiiJS5MqGTTSjE9c76FRykF9X8Nz136D3rG3SLWVfr9JNSga74BSiEcEp3UC5oUXVB8smwtHmfwfUa",
  "key12": "4bFyLtDMfhg9RZA6dPPxsBXtzkcXYRFH5xGH8GV4xAsxLto2QyP3bAvTaKCcVwS3XRNLTXLYUinJWGCaPgUtH37x",
  "key13": "4WEEtg4zcHRyA3JdWrNsu5L82g9adJ9AHQ4GfD3wFo78Z39U3cb34f3PYESccpD9EJ9SScC36QqRnmfjXyrcUPkY",
  "key14": "5xeB4BNwsVeQVLxLE57qzNwVCDCv5PXvfc8Qwt4ZmZPpbkanzYBLz7ioUrLEPyDk1sykEvRmj2zrA1Dg96JVDjZH",
  "key15": "5XQqc1sRAARF1JUayPxThEP7QxhRMPWsWoMVaLT7p9L6imZe4qXXsQocLWERSN5vGSytjKM5bnxqYMzg7v412n5v",
  "key16": "5YjJY6tj7pJXBJHcxQ7zeR7r3Wqv3o6ZoFyR56FQvoAF1prAGziLC84hmGdVx5ngRAityS83856vo6i8hxZYXBHA",
  "key17": "3zfVhc6UbvgqcMBSr2eZ3rNaABpfZSXmsEmhYwaafdzxtXbT68AF8sgW34NVSTiHZk6VPgetVbebCzQsBLAx16TC",
  "key18": "Yn1z2h81VveZSctfGQEh1Q8XZEM65q5Yjr1Vyx2DkXkQTffBoiSW352iy82ULcyBed9FhUVaktdNWwTR2AB5KRT",
  "key19": "QVJk5PXLTDfrYTbSvjgjq3yFM5pPCs3n6FBfzQGACppE998JA8fZbEGpuF2ksrWmjx3coKanRAJmqT5sfhCZ7F1",
  "key20": "4GQdQWrrzqQZAYKE5UkWHaksPzfohZKMMxWE9Jx2tHkS6bUVVw9yTEtvmqmGskHCN5cBNx2XJf9axJWmuhqZ3uez",
  "key21": "4fPfCxwyWUKaqBFb8rTFxJ5Sk4NGtokbwCppNqrTsBirr8mambu8hs7tucxQHtwWPwwhspJmEZ7cz4TFTvFDEz4Z",
  "key22": "aJxUx1BYqMzHHfnYt3JwFLJgfKUNaHk5eH3CifBK55a1az3N32yS97uKAwZbmRctoS3mKsf4teb7xT5XxFsmRtR",
  "key23": "5qNME9Q2Ry99tj2irXocQ8oDSBMXSqWUXaApcw5jw9TXXmV5JQnhVBidqtgeBjsqRoGvNvataEdpG9TraoDib7Hx",
  "key24": "54aEL9tutcY1XBo3qBBfS734SU3jobkP71drJp3cSjJvWTUG7uAvy1UFh8ZyPPR8nwpgrrL5tg8tXDb9wRogfGaL",
  "key25": "2imwHPu1N29NDSc2rXszLTUPxvdZYp76N1fz3RG6PYFMcXqKxehS4QziGJGJdLrHHcuQw43V2gw1HpuUoa4MU2q6",
  "key26": "4S7h2UK8SqYDkB5g8q5esZAsyXTod5tKQkQSzpCsLFw9ikgCn2NqkLXiz63ADqyuV9tMwFcGL23GqqfrrbEmHk8k",
  "key27": "424khhCyMzozasrb4W2UprCPSqHL1EQh3cgGk3ypwwmdvXBCxUL2D5ici9RNbm9q9FYfmKcp5v32G4Ef2LuHG4Wr",
  "key28": "WZTZsSFdjkGMCsXy6ac4xrdMDM53u8PjiGLFmGMGpnnca5Ts3XV4Mg1LGc94V4kLj13XmYQCTTJUjWg3Utpe3da",
  "key29": "4VnxjuXkaxzBpKjZfASkcXHjyXmLS7vfonc46mCpYGrCfVwReXVgspQzJiX6ze3EysUikMqEAii6SDJpdLmhE4dT",
  "key30": "2YjW4yR58tQ9LS1PBQQfxEpre5JCKFtedEusWVTpQVdC1hdeE84eUKXaMp32pkEuveb7ANvkrze8HdowkkWATZmG",
  "key31": "5Ft7Kd41v8D9TM1mSeaP5M3ee2hCvnwWt49Vmrgnn7qexPY6Ac4Bh2a9WhGiyKWCDZs34VNwHY4417bvGLgTdwzH",
  "key32": "5LdyhCGLjJeqF1GGoyZkrYbspo9Q8NHNFh1KenP67wawpL9MkEgWT4cHj3i2GRHWvnTCzApQs7XmEEYTvwstiBBs",
  "key33": "4FB7z3Ww1kA5CSoxGFTCzwy9B53ThXxEhd8LdkWqKtBCJufoLQxhPAfB6NEK277mX7oSSwDSjXaNfrxkt7ZL2wjC",
  "key34": "SNq9P6uSv7CYNoV31eJFDJ7Yr41QNcmJPGQnJLazrhPfdBRAzExZmBcRSq4CikpqWsXJW1TMRoUQGYJ1nsByqsC",
  "key35": "4EM9jLjxz2dADpaCKT5waXy3qLsTp6RrtFpsepo6n9Z5ayYS1NiroG3ou23DTKpYpCNjDziXzckRQrAPu1nLgbrG",
  "key36": "474cAezYGNzcMnXjW3ecViPQueZS4rHM8VBFfNt57nyBQVWbi1s8B15KTaHGBm86Zm1QKmfCbsgdkHTRkDLv1Utp",
  "key37": "2EhxVJthVABUZ6bZ7vmi2ViogBjmLNKNnFtHPWAtmxKqNdmyZP8t9xTqD1YhHL2RFarXGXkDoKidX16DTWamtUPc",
  "key38": "4n9RBznkX5p9h2HskaMRkgVfY1QyvsNkF7GqKuZqGABDNSdt7wbqeHKKfgdjvrpTiMyaghJs7NXu157XhoiVPyUN",
  "key39": "3xA1JJGdrryYyaxHUpAuwcTSRdCp7jCjKmB1nUvBMXjc76gguFaKN1MVygRXzj4oonvHyD2qcxGWSrtTQJusrBdb",
  "key40": "dztDVgqurKEHaRaTkGmrXFmz1nqocJ9GrvgC92KQgE2apipEyhUYVy35KtmhVfUtk45KJRqwq8P72bUAxEmyXd4",
  "key41": "5j1DFP171ZLWfegHaE8m1B2ECN8nZe5CqbUuixZydX9u4ehPd5xu2w3LZ61hUuxpcqBTBwDw6nMFWAXjVtnySd2E",
  "key42": "4ESwWuRW1juCoBpQWBoFRS6a9Q7WWVJybiDdzDffxCYS3P4Q7rmy14FYpBMggXpY6wYJqVHRvxR18VL3nZNgyfDi",
  "key43": "3qS6Lk9cEV1W7rDm2hEtB3pJTYuYBeURGWJzDDAHgrdjj2LzyjGjRfQyWKqGkuYNf98fUykb5WU5XdJ7i8A4i4oq",
  "key44": "3C3BCNdQbhzYnrsdFnCdjmfsyJ7Evm4xHyjyfQUvFWZSDKjLWQoNUYAYkGR2nc1z7Fn5W1WbjsmeZppPKGm4xaDG",
  "key45": "4tJUMY4PXrt86ogQw1bEhKkQPEDaH2ibx3Hyr74RimuZVA998zes2Wh4tNnaFwrLejQSYHmjHcmKnHs4vgBU5pqH",
  "key46": "4ms6ihqjsseCa2ta7TgM2dEDgHJnS3G49DB9A7VLZbpmDPzkXywjbCJRAj9sV3uf3Y5aDie9PMwaaA8evALpkHbQ",
  "key47": "3CsCcjL6qEezWXmnYkfrLC5fwTUE4cJZDrAtJjWSGtdQBEf3JzAMSDDtufZQchbW9PETkwVVKMGUJ1nHXDxojD41"
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
