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
    "4pvtkEahAU8BdiUoUp6JWMsjzmqZTee7Pj1Kegywtfz5bvZCv8ah2wY3HD285zXJJ2HS5MuGGFcYyEUNnsEQuGXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFrTHLc2yNsCRQRENSMTahp6oTRWBoQAVxfUE5APAFbYY51YNSbw1RESyhsGL1TiDkD8HDY7xNV1LYkRUNj2Z1z",
  "key1": "3JuWnhqF7bjpTGTpNNC9ucijEDw97tdCNFG5KryG4W7xKe3zMMCH9pZ6u3eStjtbRqJfjKQEqi2jUA5UV3HChgjJ",
  "key2": "4GRg6KXbshtonmDsX52uS9AASu6vU6D5AvC6qcW33zvqgMJDmjNZVtd6V8MtUa5uoap8vdPzjTfRazKDk6QyVhQy",
  "key3": "5Zn23tGzeo5KR6r5zpwGRrA7EhEQ876GwGibcgU5UUKXa4WAHkYxVfvQ4fBxg1JLhXHEdezBVsyqayA2woqbF4ER",
  "key4": "2HeNDM6fDHpQVk6pqE1LvTL8pCFHJoZ1oeHR3FqEX6rEub3fMdzF7VH6ePSM8ySqmAHTZypF244Q4gD3K549L56E",
  "key5": "3ZtJ9k4ZhWDZgKrsNbgBmFMHYzb9qz7XyCwK7xCNd6RCEyGJTPaG8qt2rgPP2CzHV89cLe6gjKAdghDeY2CyDwZb",
  "key6": "5VQ4G9K9KPZQGxWpYsXMNtFL6UHp8P9LfU3GytPutNuo7tuUvH9WbFFrdHTz4cod3wvgfY99zdG2fkJ7a3NJvuQ8",
  "key7": "66K88QFfYN7HZ9jH9kwNRta3Hk9GNr2wsQBCnud7S3qzdy6XYCxPU6vKLPwTQskncXNqmmWQsbeKrC2nLZoEd5JT",
  "key8": "5tL9L2mN8pd2zRRoNZPr9A22yUUFxKMyo2HF7iA6btg3FJggJhGTeATAjSKKieFNw21s9J8UvaYZXmwfxJX94Xv1",
  "key9": "25G6ckCELRBaPw9YRFLd3LhbeiiCdbX5D4Yb2x5wEQWwP48LEFhu3d31jYMtWit4hXQZaMQcKbrDW6egT6Ro9QNj",
  "key10": "3bndhrX1DEeeXTw2WS4MB1s1X6bzEQz84849kaiTGU8AbEd9v1BiQpdVVLeKX6AnaPJGQZpVpFWPkqehDQcyskuY",
  "key11": "2LTDoML1getsrBLKVFBSGwtUpbzgJhjvzZhcgvdovKUXHM2H82jZ3MWcmf27Ee9KEgj9TVr39bihPGmyLKq143E3",
  "key12": "2irGhP7Jn27nh3AarvpeAs97yb8XE5GkYRmtPrubzubrsWo87kphFv33ehvb9ixHYL6LhLLa7sWRERFKmBKuSFZd",
  "key13": "ggqwc1S16rkyEamXEMx8EgfoCynMesnkXkj2kJpM2gzSYafhJq4sCe2eMJ1tTSqjQX1j1uBx4oH4t6mpmLF4Ptd",
  "key14": "6XzgSpat2bBjYB86Xi5qs4uwHmb8AbT8g7dFkd3QPJCiFsnZXAsvE8wCf1pwEm4cvriNESPnxgToTPMy3KzMurp",
  "key15": "2edxyrZegLBarij2QFQfft6sr4jZZFDPrSMXNKWKsFVygG8YfwMDVns9uK3PcHt6B4EZaBpkydETHxojTABMufDJ",
  "key16": "2ydy5kQMdXcXqt4TNx7KGBuXWh1tBbG961mBr1Km1VsuGPdjneEKC4MHrWfqYvjJUVEckMx8axwgKL8kLs5tEyv",
  "key17": "45oB9spRkZBmC38acNQkStxt4azXSJ8BAAdoAnoGnzvgWb6md6xKPwmyL53o5VtAoFi2TyVSViwnVZ932mcpb5rq",
  "key18": "zQc6MxgEf2EAg1fofrC9WtZtUpmz3x1qUJSFsDaoBeEjwrERwwzenX9PbYJdh5cPKV3yDoZiTna24N8uBKCNfgC",
  "key19": "2dJeRLzAuY1cYKoHSmQ2wNFV57ZqoeRz94Ltzo68qEVtDCSaW323h6qEJZqQX67JrccioD1j5oiQUZ5yzTqu8tKj",
  "key20": "22zzW7jgFXrK2cqQqjCa2Gig7ZaHcez87CUqnQn7EDGTQjcKy7KPHfjggTxwsTJ7wE5GHx2HkfRWagh51fpSFyDV",
  "key21": "4RHYcW2ALXMrNgb4yBAhYP9fvGRp7DhMF9VaJn97ho8pgQ8BR85QsMikX4wAgF8zneRVtrhVZvjvTokbXL6wnFr9",
  "key22": "65xwyDaY6WUyXcahZCewUd6p4RErY38Jn8vW62fdZiRgsVawc5zi25nkSHs247f7WzFCWx4eNtJcD4uDSoKdV7tm",
  "key23": "5ya2EY3c92yvhfzHU4NDpC3zVsYwCEEAobmqFw9MBwQvAmftN7S6M4L5B3aCuCDJ8mvg7iB4TJWeiXK9wz8CMyd1",
  "key24": "kMdfa8mnc4poqXM6FU1bHwLoUi7V8oJfNWxSnGTJJ4XbNBJPaGT3KescBpidFdgGc31bf9BuY3wuThrM5FSqD58",
  "key25": "8MNkGXSbestiw4UTVx1pBdmcYNZZA3SxRKhnWDsYrg4kc9biKbQtMSAmJcoXvvsPDTkJMznq3S2e2EHk3ZkXKYP",
  "key26": "2eL6ofGXjvGXtJk2Lw7YWjLP3VdjnKokAPfop4DfxE6EqrT3ochNAEj2q36q97ZorFrSnMQH787ijaBR822Kxj87",
  "key27": "3w8Mrm8McRoaWLV6yDuz79mS2AzNNqdtFa9CtHe4rGrsNZYHJcuDsTEgYipKPbK3r8jvVVxu37EC31YvVpfNjzLz",
  "key28": "5Br2D2qTFN5rwx61aXbZWEVeHbgku3eDJzke97YsR7eCXTVGo4GLLSrPQEJvnUuLZj6yJPH4ZXv1i9hNzgno1reT",
  "key29": "4AkCDRSqaAweAe64qXxyPd7uC8JRfqhiJAHC8GKrjzfr8rdYkfgmNBHL7HKWA97s98nhSwbohdf7DevTnt73VfVd",
  "key30": "3x4q1ZGPmMUchoViYeS8gYbNvApq1eqqE6gtoV6Aras4ynz9j2goA3FuuQZzA7JWX3YHrdtjYZWEfk5KAdoaQvWB",
  "key31": "XSFnztFyatV49ADNRCRFrTDhYNBfpgYcQmjPDeSAhCqD2oQBbQGA878t8gtho7zzqKLMxBxWNmwWK29MVKJSfne",
  "key32": "33VbzFM5N1pVrrNePFGXpZRLaCiAoxdUHBALyTBJJ7L78a69pfdbJsgYnRRtiFgshH2629Rca4SwKJZHsfmdCVuf",
  "key33": "4H2bF9YYhrqdX6fGec6FMbL81AMFdaq5EkddsKuKShTN9b3FzitXtnVehQpt2FQvPhFNQ35niYpREMh6krNh8SpD",
  "key34": "4RFrLw5qKQnwU5Fc9iLL7TxuWMxMX9v7woBrT8xCQHdMMkWSccLsNTMi7XeFJuR44v5EZAnvvrfncS8kup8NjXtP",
  "key35": "4xv7nK2EL4ngSnZLcJ1H9D7gd5sSXSSK8riz9JQTFRccy1wyKJKct57y8YM6R9KDFAb8wBopZx5jTx3qYBT4DiFX",
  "key36": "vS39hgUeBnAL7e8rL99wShyzQtvFEYLLG4t3ZFPjooiYS5ySjB4qvEF5Cw5RVYpKiAnRPq9mnD3pXKCyQgz4Rdq",
  "key37": "5cXgLpa1Ep7zQPp9i773m8FHsvKWjgeNosPa8R4K1DG7SSKpRzUdKFzSKhMggGh1AnbsDY89KagCRFP87RURfoz3",
  "key38": "5Wuzgaao85mWB7K8Gqx6AbMtDitDw7q6uoCHB5XFyR3ZzzJSac7AdYwU42geSLNxUrT71TaXDbzv4i2jABWw2y89",
  "key39": "4mPXMGN5amWM261L67MbmrEs1p9nxEdNEQQa41g1k4rMh25Y5FY2W2uLDdAgR9oUMp2Qifv9pZoxMYw5bQEF1FFa",
  "key40": "LbWPufDAzEFcZusY44VYgdj9gvTHRM7HkkMRqnN71uMJEQjfgLx1cfVVrfY5divHYbRY42dD2wuCWbpbMUQ8KLF",
  "key41": "iaTpaZQud9TiSFp7hXjX8ZJqALS6cSkELuhTBZuRTx7D7aPiWtzBaNFwJqh4GpNvb98gBr6Rtb5jHCfhLGyjNYT",
  "key42": "TJPZMdS8pYqmWBJcGvjGpz8tEhLDdbx792Loh8VptcpTgQ8vtTirP2LBcqsPisMZJXQp9y4QojymtCBbtCWnzbp",
  "key43": "5KGvgwpAFRPHt4AsXTBpYk1t9GTHSoXhFwLXwdCkvy7NXkpbnqYKAkJTAP7AG7VLyZNFxZS4bFE7GQT1sncerrQN",
  "key44": "2TjwToZG8354GJgWhZxiJZY9D76XDXvwcJEdf9pEZrM2H9WYCm95zsaqJj64dafyDnWRyUVwVD7JnKNjfH5iLvkx",
  "key45": "3xPA21XiTW6WNw3Xy8XNfNPT7MEWNoMKwABDfkPwckjpcheKaanxsbqoLSg1tJsQZQHXHCih4JFe4K2ks7L2hVd4",
  "key46": "my1V5FvZBqwtrkB3LPiW8bwvNDJvthbre8GqLpwK1dVb5CkfzhamN8v1Zfuw3VAA66nt1dsJvK29jiwB2rrkfjC",
  "key47": "2nKE2rUaet5KbJMgyXpi1xKcF3w3RFrHTSoSiAfhSkhyxu8gtzNHaqZxcpGNzbp95yBjPLcTF52iiwzKkXwC72od",
  "key48": "3suyMcM1zQv3eV6jKeS9Vk9pMA35LW6K5RmqwKDxutfqPT5Goe7q5L8uoXKHHdBJvwu9BJWLzLGftrXc8Lewssxo",
  "key49": "3YndYGiZMPKVx1vc6gcBJCLBqFHNUU6Gy3K2tm81inbjWvRq7CC6U2rvDoebMSFHBRvcTnhmaAhW1DPNqtHxuEvR"
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
