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
    "34DNy3Uns8KzoVL7b7MUmVHVyZCnEqMkcz7Ew5EiYkepFcHoz5i5G2Wg6Dw5PtVdYdRS2JC3L51oahBKGbuCHCg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgVwDDyLGMdnsWLFXxVk5oa6ZdojKojZCUPuWmALVtn7cJxZj1kcVUGMGiTiVyiuZF4gz7Hcp8Q3nqGg8fdVeVT",
  "key1": "3CKbWMkkwxuthVa5mbuWTi85uT4JSeThzjiurt5y73ZyWapEYbAeJs11nDw5zPEwZk23Jh76s1AAn2aj1RTnr53j",
  "key2": "5JBc97V5QoT4zv9bUhkQ5RFDx2N2Zo25WX3ofrr92ipje4PRyV77CkkD75Bwe1wG4eAAh8xRgRatQfMgDjRri1Mk",
  "key3": "63Ny4bPNTFp5R1x1gHbPi7dXaofeLoLkxBHauwFFCbkqy2bRecB6hJY3NnVfucLreQEBBEzd1YHP7wxR9yZKwzYG",
  "key4": "7FcGcDESDRUMeS1ifWDZNVMn5pYM6XVGqnxd8kfMU1SmPJ53etRUeWkR9YZFwYUmTdP8qBVKUBekTDjtcgqs61C",
  "key5": "3LisACvz3QXtFcp32TTa4t4ujnBgGFsCNQZYtZiyavSiNrfpnvKRn2QjSg4MorusYsLpGhxhXzSaGyDA8QKxGckw",
  "key6": "3nZUTN7GgpSaJQjgVCQRu383n8dibNsa3VzkrC6uKJA47pAESSvqctkXwkFHUTXxRW1rWqsKvexHipQYeTNT78h6",
  "key7": "bSLoLmrtRkQmLHn5gsYFTdcLGVxCkCBnyQL9AYatYDTKhwVq8RvxpLse1ZWVLcCQoc3eXYcRF7TBxJwCuwLxQyj",
  "key8": "4pDYTD7R8xLrkEZ78sH9zqB4wvzECZK73mT1z4ZUtZny4rP8WDuvP4UMEUei6vUcrGSaZ8Y4zJzGSRinDPEP7azd",
  "key9": "2jmuHfowDQzcZVGoXoEkNr3BX6ZdenUNwxzVdxdkn2fqZkBZG7M5ax2yHkrmHFzjbz3HUny9KQScRADmJ9T3PrzH",
  "key10": "4bFFxKFYg1PDBUAiPft7uzDs9FNz5ayoFMshjwhHvjgA2hX8vZTs8N2jjZJFVNSfAx19u9mffQANLtiw278KHZW2",
  "key11": "5fDDsTCT5zHgnGVTbopf3b27L2JaAesRuDhD3U9vTe9SyKee7qR6d4j32hWGaYEBev9X998uU26cNrHXqdRhsA8n",
  "key12": "3RDFaUWh4QToG4bys3yfAaZUdCZLSn8B4QfKkG2FRHakMAk8yfdHmcLsUChMEsiqxxYeTT8urCjsxhtqPCzQqgNf",
  "key13": "4XwdkMVwQzKEPKf55zpZBHTo6VnZVhnJQDuAATPHM43SLZntCEqatxAY1kJ7tZRa3FDhy4h8f4jiXpideLTiJGXu",
  "key14": "27ZxoskRD65Lf6jMJ182T8sBNZCEqHboFwBtMkFKenPv3VM1azobNa634ECcUwtUVPP8V9W2vevXTk5DQrY4Nsic",
  "key15": "2HPc6m5VYC21ea5k3K7y1uux9pmkdtb2MoGfccXVRnAEKLe6fLPDmYumqHXiwiZgMvso7G9snjc7DrH6goh5v4sf",
  "key16": "3mXNkNzCSs2jhsHrttHgg6QjvpVqjQWMg3QzP9GJhBfL8CzXgGrc62gdR4jXGDyubZrjTHJ75VyWyYtTs6y2SEvf",
  "key17": "2cujACt2p3cQDpjZuXjgg7BG1MQTqahiYyrKeTPyjRR2hThNbA8JR5M53KA4LxwbwHKGo6312Khq92iuuAuv8gn2",
  "key18": "3yRvow2UPd8VFwe5TqhkAEggqjy65BPksNnFNtsptUcfRRLf2Mf3J6AGpeiBY3E5iBmB12Lz9QSC1mDxaYJrSsmb",
  "key19": "5qQ3iuEZWTBh1Vdazz1v9W1beLVxbpYn3mScWsXCQ15dZYBuz96Nqhifj9NbCuD4oabJtaRXW1j5sdRHujZVEe4",
  "key20": "2Yo6pcYnUwKRXH1vK9i84yjTTEnQ14E4oGNJpPnNygeG5ZZ66KHPJGghxWUJUukUcV9Mh7iWaxWE8D8PuMjoQHoR",
  "key21": "4xioaTWK5YDEs9Ywm6rUg7cVEuQvMi4fhvsyufhUJ28VRykYSzFL4WTbDDcb7d3rvumYNcxK8TtaGNgzLMeFNdag",
  "key22": "5Qvnh5dwQzBtNhJut3aYnBcKiu5ErCHioGSDWcVrvtnYXVEf9bMbio8aNeBzYqJUBudzFFQc3V7d6SoQBGXwqcwz",
  "key23": "43irbLtWZTGWz46Dqvijcqs5YrUMzzi7XtnoKtdyamgsZNxUfNxGTMWTYg6DCPkmtXETSTU2K9vDidmmFnJmjSYP",
  "key24": "3vdCxKUnPXCWg5EjzWYyF4366umb25Lx4juWvPzsY4Y7tb9ABdEj6Eu9iLv8xeXkvjyrkqGQr2LTLJjTmfeiaaZS",
  "key25": "4Q9HjTzNKbKmm87nQrnUoJsCU1YbSgvvN8RodLcZW9jp8a5XKcNqaFXyc6g3dBuq3m9QcYoSx6hCzyHbd1GWw2BG",
  "key26": "2BQpW15beUSjjdKvVppt1uYBHifFF68GrLzhVaZebW4kvDWgA3BfxpcGyzSiHHwahTjYWbczjJSa1BVLYa23Pdj4",
  "key27": "5EX2wXf7mCPJZRVCj4fke5Pr4W53rqozsikvAGYsN49DeEowu7at58eQfvAVxg4yBBdAcyB7SLN5wxaVB7BLkH3T",
  "key28": "3CDqYeX9sWtjPLpgABwHqGja8GPJtMCG4g9WNTA6hfsv3QRtruvZ9YqQo1u1tvTKhK1KJf4TA1DVgYNQCfjE5H94",
  "key29": "4GoEqn89bhSVKv4rTyS4sLsnoBca1MgjxK8sUuJCR5MaPCCVTbq9d9ZHVD4mvStVv59i92e3PqwWfrZRCEf6YeB2",
  "key30": "5mas9hLDpYY5rsPFGWVdBf8eBFX5YUsLX4tecJsK3bUzqjMrBMaP3GuSwJFoikujba4xcaAp9LWSk4Zv8WLEUw3Z",
  "key31": "oeuWgdoqkYVDKTkB3bhbfte48WDFFBMLqbHgLgz6poUBn4x75xYW1uXkBiHdfBQzSxdyCNN7DVQSf2dBxnH4qfX",
  "key32": "5k82DUASqbvyQ5bvZNF7jqh7XP1tAry8Vw8SYN9Jke7Duf5jHbPKrJQLdo7PYGGYmGPq6DJRaSGjQuhQ7z1TtM3Z",
  "key33": "3LjFVJeHxNkpKoyv2v6g8VF9CtJwjghWj9rdMiyEgTsHDhhALKCQsG4DPUvdHjRmMWEqdiHmaHcmzU5sFKB2qmgp",
  "key34": "48yUozQyGXDKhxDttYdi4bvUMetzhhZ9WQs1En1Xx2ssN6AULvrATVkh4k7DbCAAkNSVPxaDQFPzETPbu1VKRg3H",
  "key35": "2sErgPGMhgCFeByHEAwXhGLgZzjRigA851D8Kw8Wxfn54RN2E5u3wnCV5etxEF7MUmqnh7nH5rTCJ6BKULgmUzmG",
  "key36": "4NJPqugFPyJU2XJPm5dsxiXkugVefoHxahc853XeXygrvSvvJDsSg6SQw6TsuWaFVYgQjwqCyDjTShLd26zmUC1y",
  "key37": "Etth9Wa9H91hqmk8uLLR4rMyoJ2nUNWfe32rhxRBjmGQehNw7ETkf4pTbpp5wJBEHvZuXe8EKBVTbGojTGcZyu5",
  "key38": "3RakepCmHX224Ad9HeM2X7zXXnfqLWsggy9yLxx9cYumLNPwCmXMHoXqTsqcTSfJUhDig1v6xcdwV43wsYDZd6Hb",
  "key39": "9iJyQs5XDAmTNiTJoFsh6nrVYFhWyhBiLJAP6mDFtF4XkBotDfuWta4SpBxa4ZYDGYaxaRutSmfbewLcesUAT4g",
  "key40": "5JbDJiD4hbZrveeaAGfJrc1YHXykj7CmcUYgrizuvr5rjW1iykYNx6oa2CEqL77XUZjTronLbu7DKVwvdR6v7kL1",
  "key41": "629Uywa3yrXN6quUfNyXnvjYovxzCk6vhn1AvyXmtYy21Bi58a8D1Eegf2mQWpQ1hxX1qj6JBbhiMHxLe2cCRZ61",
  "key42": "5vQZBquzEPzADNneGy7GeDsST5s7VwQTPzNTVvQDDi5Yo5t7k8tc2jNP9HRRttPWNuaevJFstiW8FgKw3zo9BLmH",
  "key43": "xAFU7PZ92XaYu6w7A2pWztjUq49D6ZrDpJHDJGTUYgbqF9jtFcHSaFTB2MFp7A5sTdZck4iPsReKJyAXBhjRT3W",
  "key44": "4QGVCT2x49vo86jbwVWn9NfUwbohjSiJuvpCyahxhstRRrxhBw2UNPhhxo9p2ACgkM4cuf9HoVG2QTpfCzK388U8",
  "key45": "4xesVTXWf5KXWp6fGVasUVLjJ4aKz49CHzbu6xfPh883caxJMbGwGs812JJtKWo57YAymwq5oYSy3PhK43BKNaQy",
  "key46": "4YZNpfbZtvF8HgXmfhDVcjUtFqq9wrfu5mDHirD3sUBwVUP39qzitWBf1JW2TFsf3w77m3kPwKi7M26nGy899h7u"
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
