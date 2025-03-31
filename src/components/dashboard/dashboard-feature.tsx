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
    "ZN1NmkjP9sqajNt53R1wpAC8ty1Xu7h2WonrGUUFqstPcN1hfQFRSBzJE6qSjZH34hjxiFZ8nyqzz1F53aTcUvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWpAu7n1ta6t21LtZHvXTHoKNReeViDGy2vZzbfzK7Ro3V5rTBHxYNUHmet37WEMTnim5N6AjD5vQDQzF6eKLXB",
  "key1": "4hrqMQQz52eVxjVpRpXmkTzFiWCH1WQrQZNaTtFbDPcygbwC4fHXMSzgXDPgxQ1syto6LWkEZD476G2wCuy4PUk8",
  "key2": "5WbBJtQrKSnVDaTU3d7BeJCwCLHMRbXo2CbUcTzkzi576Eu6t1ciHagh1F9mBeAeBa7yuu5ma7iML1syehtFPiNJ",
  "key3": "2Um4hYfM5EgpXnwjJ8v9pkvLHXPm8YtY1LAGmWmVAYwWUCuuZvF3McEATRwk9xKxQCFmmXAtfZR5eRiiap3vHoam",
  "key4": "3L3HvXeALuBswQ5mdnujG1p4eS1tk939DFtZwCwvAKJYNVVnuXSL1Vq6H7W9Vy78nF8pmyMFVEKoJJittD7u85ER",
  "key5": "3ba1NZfykrHBqAm9qNe8WFuzCXnP5D45pSM4QrQZHG1imzqeoDhHZ4Ca88P5CD13eUmGWKHK4uTzeGMsg8sb8r3q",
  "key6": "5oJNzGjKeMqd7yEnkdxuREtPANhnZJcEa2po4G2F53MywTT8RniUUVxe5VpsiHuNbsM4yz5V3bnFTKBvSfUyU6dF",
  "key7": "4kY7jvNiKik5zPnp3VbiANxLLHJqkh1WDA6ZZAgGd2qDCEtFwL1vedtcCtgBJ7WoNr974LHkRCCCoFih8ymqyrAg",
  "key8": "2pAL1ZHbmLGGdSR1zfGQKtBuKjthoHb8SFofAFrM9fGWKcziz25AmPLtzZHQ6a1kJ5JTeCxP5gfTsKrcy757aVWy",
  "key9": "5cJLejHFZXbki2KaxB71EudbkwCxE92VLTwWeyTkXiVcja2g4taShwg265YjUEix568ZHqzQ6xBM3aB86kTSyK6Z",
  "key10": "5Qx2rcGoPF4wtcFsQLD2QxkaPu7Rp7Ai4rJYqLPHR7KQAd4Gh67ejiedYkf9SEFQniVe7zAZVRywkbB9UqGsqUaf",
  "key11": "5tFcGpNdyPhsKVFBb6k5VpJZDtyss8Mf37L4H62dzmMfmFBP6ZfqqYF7jSeg6qQYvLSUM4NE2bMvqLS5wwDVHA6x",
  "key12": "5wGSKS2RVFT5NRVo11ArMtTV8VEMfnMFVnUd8scpU77RtzPd23gdA6pj8tiFbY9d81LEvbaXiMGLsLKCaqKLoDDi",
  "key13": "3iuJwg9hNStiysmneERsLcjZK27qf4F24TLafpYzRfaDUAyuHeZFZUqYwjgau12T1hwvKeEUhEX8S6a8wAJ8znTH",
  "key14": "5VFTKTCL2EDW7r6jsacGVEXe4jK4CaG5wiDTANf8nKkcaK2bR9j2NaFpM8cXoKyzpHPhoMN9P6weoM2RTyPvVm1K",
  "key15": "5Drdd1a2RgWsxjZeYaUekcQCwgHTKx5UVUuR5ZsWwvcUeyAXxAMijFFBFHKw3HYwujDFGFaKb1tLooeUDuXeLY4u",
  "key16": "YQDpMeEFRHmELHS7BgSNiVMkavjL6fDPA4rUaGVdDtvFxa58vQwemmTmNA4c8RTKLep99Q3DkV3HMpMWCFQuWU6",
  "key17": "3ghwaqHb1kTjCN2YC6e7HmyusfdYK6Fnuwc8cK8MsqqmAeDeF2WMadYRv7UwgdynTS49Fac4xSgA3wdFeTbptRqi",
  "key18": "63mX6RwcMUC3DveNtr8rLrpAW3woWv5VXkEJbsfTFCfeHAXW7QLhk4mE9xymYuEs6exWNas9WukmvhJPpUUwzQbq",
  "key19": "5JLGwiTPYv3MV457SC5SvEfKS2pvoTvTxYWGXX9EuMyT5wJH9KjpBn1fzBB15FYwzVs8tH1eddS6NBXvkxmPaZiV",
  "key20": "27bhXtc71ZU75xuyNMLvy1ATsRpd9B45kvUVUP2BUxkhxxiMTHqtwCcEQcTuX2XZDuqrejc6xr13EZSJAjU4QMLn",
  "key21": "3aJTuz1aDQrsaZwwNSEi8rbhjYyD8EtgU1H1zS4DBg2ixrxFcSeVfFRLs9q8mt9BL9eGmiXyTFXNip8p12rgkps9",
  "key22": "47AKFFdnfAoouJ57fGfb9v9FfvFJpviC76zjz9JHzNUUYYdeZLKCUAamMPNH5SVCPHFieQb6CDDj8pi7VTZbeTUK",
  "key23": "4QEb6YbrwfMKoeP55NS5ketWJzJAfbdhT9XNNWWRQRLbpKb8Kbzvf4Lkzrsjax3cRf5TCbhRzXZTRxMKFJAQkApT",
  "key24": "4HcYHGFHnhw92qtrJ6aezHLaK6UgMhKMsNTVjrcyykv87UHSoTvRCXF2EW9KBnFtdDhQmYmQrCR5wisoczvqvQaq",
  "key25": "5s7Y6XqacH9PCGhk4CqUrzuHFWm7fiWAgAgncfJemBs1cfQDFGazGTbahkogCSA7WBZzgEzCvSpvdfEgWVB4kQiu",
  "key26": "d9KfE3GdhpHkCcivheL3a62KYbqvkUseXfia5vpnPQw9V6UePMRYGpz8gtgeQzBWqDQFJUV7EfkSc5VSrMxKESN",
  "key27": "51pTxgzzfzTgakYHHApDn3AgbjnwJGdksTyD81EwtdzrrC7Kgd5hzrhvyVtMp26rcPmZvKdHpnpfeX9QmmG4aC6i",
  "key28": "zX3YNCXwsNnYeHZTxqfux631MEBiXUxvwBKCsQfujqxUcAJ9oNXeu393rUD6iZqJPL2mKtJDtmGJoGnoV7wHwVB",
  "key29": "5ZUThZLugSGNHBQWEcaA8XLYZMQGjNJhwByxWbG58q466M15NaEbCPJFME4DgX8zvp7VHhZS7cxxvCnKYcDKHF56",
  "key30": "5LQ6MGVWD5Rx13h3Xgfv3Wyztuc7aevgAXwRu2V4ppDFL3M6tTqgfbCzQviJDiuZ7mYT2c4zoq9k79fm3PWDiGxq",
  "key31": "3juur2PgupWAjhMEf8BjJ8LnqEka2zgZSafdQuQ1kKd3scfkaxk4obBhi5dH65K1L9EkBg64G1wQ3jGsUSdYh5Ae",
  "key32": "5Jay3hdM3UCiN3M5LKdcxjpqt96f4QSt3K15Usg2nuSTo1U2YvigcgVEk2qbMkkKfDaKhrZDDkRK7nUAk8zPuXo7",
  "key33": "2HkjK4aeRdcLNadzS5dFqZs8LMoYLqzZv27KgAVthLtd4w6WwiJ5QkCVhD6NH6SktjCLLCre4BPviv2yUL5oABU5",
  "key34": "4Nj4C1cEd5KEtpAXqtYmy6ijBJ5BMyUxSrkRubdzxWtjqo9q6MSFCVLJ27FThtADQBieCjZaeRwq5XdVQh8hDcTz",
  "key35": "ukwukAeTM7fhKjWg67hRC7A6XDbFVqwaVLvmHAX3npSqy7DyzSqcgMs6sbFXHnYD1nCUFZrrnGo9SCuQxpj27Cy",
  "key36": "4zZpg8zoA3F3H783swUEn5hM5nixUn4xg1ZcyGbrFWtsr6m4ZBa8L7cHzSVPgj26kKdrVurCpoMiC95fPXvNxyxn",
  "key37": "2Ny87BF6n7kGtJJd2Upms2bLgCWXHCJ7UdeRj33zoE5fBJ5tb1Ykes3QGyhEigNgHCpnWVxX6EEf2JjfL7sZ8nW4",
  "key38": "EscC8mT8RpzVVQRkhegTcBToCJA7aKrWJqh8tSQaR8oschmKUTwMYxTkVJVLezygRCRLaZa1Npn8HVZshyp3tRB",
  "key39": "5nRuBZrUQt8DwFiA9ZCQZiZ2Ae4sc9mjkLMMsuDh4ViLLZaDfXA737hyj2Xqn6ij9TJemtRr329KzS7Pwz3oFkqX",
  "key40": "5ibFM6yCgEFopz2XEG6hQsNDZK8JrbMX3R1kEBYasrCtJyCQCwYxqYH8LhVApb3uEqyCdm4sWrbxmRffWMnZTMqF",
  "key41": "3cxCqXUVUiTSLp64vytLNSRg374Abwz1mArbGNwKHjmMHfNbEzJ9LrT7sJxSsCY3FDHYEdiHnSYxo9wxbrLVZSyh",
  "key42": "2oPcsZJMvrgQeLyEQDJiy3txkhvzom5UmNCLEaD6Jky19W31gpb8gZT1N3cwwjqkudZHnFqdB2En6NcnTuWt8oV",
  "key43": "3pUkT8n1f23q2PxCUXttWHLG2S1QNAizjFfc63j62mbzzWKakspJsvfY87bhV3doma36FMA25WBVtcNG2ZCMRcMK",
  "key44": "3dVWzNC3psxHDcb6siR8xZVjXauWUHCDtSEP7YfsuizeTGaFVg2HXsmivt75Crpch9PqSiMve3sHXS2ee2M5EASH",
  "key45": "351PX7yMCtwdKWbnVjnRErTrXt3Lpx8T919rNm933jBMhitsksErcvoPRNcEcPkocur2KPJcnkdKbNCxKgFGcfoz",
  "key46": "2LQUjeKqsmyEzs2Zo6wkDaUs5iMGNdMc1ZkZKzijFpqTmNauRDjzQ2wtcZBfPG8DiNvDMYA8M6rWzEzg7MUz29TH",
  "key47": "3CWWQA23QVSWR34Ag6UnrZ2Si7W7MFTKepc5yvNHdhr8ipj5WBELQsBxvH4pAmK1wgCRwoJ12hn5GUeuPuRmbpmS"
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
