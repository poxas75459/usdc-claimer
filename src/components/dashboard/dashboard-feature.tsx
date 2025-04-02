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
    "2B5sX2jQTZ6NppkHon9BTn1QwRbiSLorv9aRhuoCd5YjJ88Tb8V9AFPhdAUaLcGdmEQkdzzCVTH7WtJBRNW8tSVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527EmaxpbVgS42u1x5FtEJ1788NHgk4dzDbSS1NgUZAPZMehuQKRRTgz5RJkKZp3AqVVeZtWE5FN2wcSKFgw8BS7",
  "key1": "5YuxK51RecHkDwv6dPYj2LSNjSJzxzLHUbjMik6TPCvGgvFaBrFSsawXHFupRDHE6aTDdYuBhmNKQ3LxT23hixzR",
  "key2": "3LznYPr3jhJQ2xd9vu4QfhpV2LjneynvFqWoippWHs46pkWqusSLronJyVCASYUdbxATQdBMoVdFq877YCxXNrFA",
  "key3": "2ggSnNg3pDvk2wqJQGbp31ecxngZavR9NEbH9o1cKaax4h7iZaux5HNtUvohUHmqXf8dp1SWRj5Pu9wXkNYgVEEQ",
  "key4": "4jihLLrEEpVtJyeifaQvAo9Vz4cEKr9ds7QKq2xZGftK1fo3V6bJU4fEDKJvJBAp5pj9uV1TWY1YGKTM49ab5bRk",
  "key5": "4NNFRKkp3K57ijsQYATuknJF7BsfnvRHE5XFRvHnTDBjFCW1Nz29AjHYFSuWTXVjYZ1DFnUsbShpfhpRVbnW4Esm",
  "key6": "5KD5JGKzwuS2b9V3AUFnTPC9cRQC9k5Tx6PBrpxWrCNVESMP97Mb3VQtsn561EbpS2eBPz6w8h6CaKFArvCm4zvv",
  "key7": "4kdKh3snEcdzsu9tbdVQ9nrZ4Jgg1HFUKtn4BuXWEe1Jp6tYuu5o4F9qNqjqaFgEv6f2P8jEfrDpTqGvu9q1P8yq",
  "key8": "2pxpbVJpcTU13J8Kpref7x9QqNfkN1oVb5knbbP4PnHkFNGWd5EEATfspUhfvrhFoxRegiQu2hAccSAF5v2hkfPv",
  "key9": "5PULVXESYpJEwwwKGD4CWQ3qzs7AhDszF78ZmVbrCimmzMvoW1Wf4zdQYVahehSkLwHjghDfUTMihHNPfCUrGBKk",
  "key10": "4ncGdiYeHCtnkMef4YBTpuF6gY4KFWYPQNgTZj6eLPaosNyA68qedp2KUWD3KC5ofWT31a74gAjJ8oQroAvt8k2L",
  "key11": "4e28vPuxkno1djKyDAU9TjDiBEEY6nuipy3Xs9bAiJZJ3PDg1mbx3t23AGkBSeqWjuFcFJ41dXdgxwfeuH3ecSuV",
  "key12": "3hog1nhbTztgG6SRarBhBYwf4R3Qj47tEQ4kt775DwcKEJ6K5emXPga18TJ4JBb8usL5qkz69n9NqHia9jtSnBQh",
  "key13": "4oiRSk546uvXXUwQLCtBFBxt7RAPacs4v6hKs5fN6FRh9hLMUq3zEPgpBxzV3kgDVRLk6H6oBaJC3F5JqzbZB5hx",
  "key14": "4ZxFjrYQHDF1Hin5UBGdtDAjRrucNLDKssyj8qZCyZawwMqQsY17zZHJzjRKwFapc3o5Aj91yaQFVVE1J4ecgom9",
  "key15": "3SJwwVTXccfEvJDKiPT6sJYYeNGv7bywq1742KQAQnwcbM27gz7v8RAGu4VixoPQidvib5HegbBbxzooKHTa9aXu",
  "key16": "4GehJa6DzcEWaLoQBFtjQHFsKwRaRUcYvmpjRE4JSCmy4siYDDigQZ8GNwoT3CeTFVYFGJomHCJaaGLB87xUV8EW",
  "key17": "27ZM8iuJMhtutogLmtaVhomVgvpaaM63K9zsSEoJn91M8vKujNnKgpGgL2pSiQcwJxG9f1YKRdEkQgtVhMsN8iq1",
  "key18": "NytaeMDp2GLP9tna2Sguq34YYZJdxDF1mUeR8SfJfE9m1TiGu6U5wT61LLrfrZFETG5Lt4F4SzJiCx9iLMCpbqo",
  "key19": "27wBia9HMBy3YppxsTeKS4qPPTzJmSAVTAfXiLNQf4FUwpiZYu2jeQHuMZMiVhnRXr2dZjhgeycbNroanK1wjYaZ",
  "key20": "5fYAgEpLh4gExqExVCUgaqUBW3B6PmWV8WX1ep67tZWyjYA7kmtnnrM1dMHxFPzEHCeh5iRmKB8NHFhq9kfk636S",
  "key21": "oMkH73h3ueC1MJDmV2xsDJCe1r4QhSj56nZjYL69GSuzc6aRfy1C2FnccQPKaYYXXcyn375WTxHyxLGAhDaUBdx",
  "key22": "ehxdDbMaChHNzC1ntkupvDCfonhLduEn9Z593BhAgDhSMUGTD6bomzRxmCCafHyq1zf41m8PyokqJgKJF8rz9yz",
  "key23": "3KQvZqSB3uceJ4nNY83MyAMcPQykkFS5xkcTpDxhMC5j5XPLfFHfKHo2iqykuN691PdxqBCTdrK8YFS6NDSogKQg",
  "key24": "42tzgMSTKRUD1YfwvVrKziDLagBLZaatUHDZA89gHQUNJdrHRh3EJXh8VhtFdDYnhQs5PaNQk9rXNKqmdaRqPRBU",
  "key25": "35U6mw99GoNpbNknMwXyRNNZomsYvppi8reziZRAbBoTZ61w1Y1e7Qy8iy2gXnsdd91Ufry3c4vWd6RezUg88Gfo",
  "key26": "5AJs4jVp4BCoJ3xcD1fzrcoZXnphxdbSTUiZXzDwDruJvf8SYkSrbmYxDaQqj3GyJHAF3hdtzE3EJ3EtXyKGYWzy",
  "key27": "3QeUpgT3b8i4SWcYU9rEWSqATVSVJ7fegaBy7vgXwNNTcm27kPcAfPUqoLcryRCUToE7WpjhSDNvTv5uG3yZdf6s",
  "key28": "3gx89GWDxyRmaLMVcNzq2hQMD7X3cBsmTDQManrwaCUMuDU8wtKGSaQgvhxZhyxtga2oefz6cHkYkhgyZUPg1z4y",
  "key29": "3At5B1zCusP8NtzQCkH4KVFYLmBnvf8Y5DS4iNg2w2RpzFs9i3s6Knckn1jK1FfDkqn84etwzoHx1PojXDgynEbF",
  "key30": "4N2XgutaRv4iK1qR23qGz1c4hbrqjz2FvHDsczmqxcUYmE55xoervMcUtMheGipMFW6xcki4G55ei5PECPqMKMmk",
  "key31": "n3bgUmHf5bovJvJtS4nMS4mNrrAUJGawpMBykdg9urXLTRj7ZKDuzkwxrrmeW7V6JFZtbSp8mYv92u1BNGY8upu",
  "key32": "4JWGBvhLHMmvHie1sTPY2P2hMDexmW3jXSkPBHy87NpHLJiRdJeA3QqypuPYyrnXB9BhYTB5GvR8FvMoMCVrWoeA",
  "key33": "4xiqRgQU4jdrZUut2UC17bTBnG7Uo9YWSmw6ANPtCLvpvRXNYV5PkH7H7vta26PAeQfvEQjh317RoWpnUpDiSSXq",
  "key34": "3VfQpTXk6DjdSLFfsFMkGuwdmbsRzh1GiHbGJjjHNvz1BWwEF7hmim58xHmqugnkDhVDNoTzVczPWzfytUAroDuD",
  "key35": "2D3PN8GDLWkTRJxpC8FXyoPvLCSZotuZUk2hVZjqZBS7mix94cZ3iE6JGHBUEZMKcHD5omaQiauX57pBuz2XVjsb",
  "key36": "5cgv5Stoj64TgxhgroarZssnfACKqtXbPWUmVuR971iHJP9CawQP6wTUJ7TwmqNr3dgQQhSH96rqXsGFpUQnsCx9",
  "key37": "4cDSZD3wRmCvAYrCY9ufCj4MeYKtoNUwk7f9uxpibNWNpgDVK4j5Zattt4hZJXffZH4DeJyRWdYV5f5vJ9qa6AVX",
  "key38": "3vbYJv36w1hJsYyZLDAdfscH8yPJJuDaop1k7wiFEgWoCQpn1QBXxiGWUiXSTiGX7TAAWoAZMendVhz92MsmB6uC",
  "key39": "2CikkumKjPAHwsqNnqYFLpT8aorFQQf27BP9qwszV8Ax1Eu1Eurd8vQ2eR5Q3hxjVFEjV3vpB3QMMTj9qXHPbYU5",
  "key40": "B9KJhFkXCWr3GpcBubws15oTeQEcZZq7Bh1QXBsUzjQCMQRiMCzsSRgzfDP9Dq7y5h14S4jGbawkk79QM4rDVa9",
  "key41": "5SGfxUoCg41r67LrCrpVe55V9zAoiPznaVSWpMiCdb7RSbRGTTMu96JaZDGXA4yWJsogB96JYZtSEmFz2FExrStB",
  "key42": "5LEJujkswS2K8rNMfbs5tg27Q4aaVvTabe4DwkQ7FvQAaYWwmxs5sKrz7dEM2YT2EtvnT7dzDbRX7iZiWJHBZSVb",
  "key43": "4k4nVvPdnHrsAKvVLzm38LHP9Zpt9BSWSTjGZ4n76uvmLwDtnENpaNiCmykDwVMVtsPv92FP3kppmX7nodpR187",
  "key44": "5AJM6KvTFz4hwViQ6h7cb1oxrfKj3B79bJweeGvR3MnV7xCVXgH8qgCqFzU1TFUiJwzsALxL6JvG6eU9s6nAjcuR",
  "key45": "2ZdC2yJVGY5jygwjsrFRX4WNbV27qP6LcNdya7jU3wCc1Qq3ZF2E6XHibAZ4J12hphn2MuDYDeKo3PYEj86LHUoc",
  "key46": "YjHKtxQXqWbuaY9536CTcA2w7f6A8XyxoyCo8pTCdWqdkyAZ8yEYT26eLej5CV3i3TbQYuEscXfu8jgMpEGnnRP",
  "key47": "5mZzoeY79GzPVUUJv9L7fragmupbdfUfJMgicxNYLUxrTQUDk3bmfVGXux1znpcNCcY41LSPCuvLBbpzQPn499pT"
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
