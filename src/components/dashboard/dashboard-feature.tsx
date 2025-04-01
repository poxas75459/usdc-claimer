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
    "2exndwXjn1Jf7wgKCK73cbiWfTdnJCYr2havPs5n9sEsUm2xft7iCnNVu2ewr2pgwCb77pE6ciob99ZDgzQuaGTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ht7BjrVsDmvDSrzp4MiNCtmHEFGpvSoTuo6thR6KhV517amRFoVFNaw2VvvvVcZQay6ZoqtRSrbat2v9qRqQv9T",
  "key1": "5YR4uGMP9f58uLGPQZV4mqWuXmpBvgbKcfzk42GCiFVzn42MrcYDyPo8coEmzTAgFkZckGCjtANQ5CZeKvQuoMQC",
  "key2": "61DFRptnfgxFY19Qy3Sn8QCUBRknzaPn7iUvQQYq8snemiPFHRe4PBfXxAVr93FmZSnSwESsophVdDSUddq5u46B",
  "key3": "2j5QqGMWQUGNVFTfPaEdWqzEmUPL6Advuoic6JxzQgQR71m3XwB9YvmLHwAXoZr7VGp5zzckxgGNFZYbVD1J4j4m",
  "key4": "GZJkxDUTb9ZdGTRS1N8Vaw2fvYAbm98exdKcspknT2TcT2razkkuMYJtVcFepoKD2LDursCQNdMXYt7eMrori1x",
  "key5": "5HC1YmwY6LvxEXHRcNEiH4gZMA3AXsfBDq4PykKmctLouv9QeV8xQPBRQsY68cNagkJZ2BUeEjrtqbvo9cpMQy7S",
  "key6": "x4CGvr3erD8SafNMGzPNraZ69jciALSiagRxMgcXj52yJ4kKgoEX6Bp1DAPTaqB3JZZniEQUKaDKrSN93JbXnpy",
  "key7": "2JZRg19651qsA6UNY8TLdJtnhr1eFSYu4oniz94NKWrHatm23aosbCdJ1AejSuTUKbrUdHV8PPknfiEhEfAubqRy",
  "key8": "3Th5Y35BHCrk8dThgoedN5NkRDb6FRYNgAkRjVjvd9NXxRxJUct7mXkqzbTGqnQyL62dKbUn3DdFokJptVPUgFca",
  "key9": "5Y5s7L1sPWCQ4kPT629KVqDDHt4acTGFyX8yRpNUouWwCm9YYDE2qk1wZi6hbm4YNsQApGpydXTUKqjYjGDuBeLg",
  "key10": "4GFrHDqENjxyJpnrMMeMfGktE84DxsZqVa4P9VE5RUj5pcieH9EPSS5BeWSH7m1bXGDFsbqtetQMPHCV1EwBgSnr",
  "key11": "2MmpPjR6eiUSH6196S7YUtnntaLXQKy9MmruRm4MnvkUsH5RK4vC2Pv62brVD6jeJYcHh5dy2YHfxbUz45imhtib",
  "key12": "4yhNEPXyJmiPyiW18m5fyLP7siZT6WDVmqWutrHkTph8rEuAipzHCL2RPK2wHrZpjDFQyn2Yq8uzm2vhosHQY8s",
  "key13": "5Laa6pEJ3MoP5f4evrPGQZWekH2UtR78GUmR5Gmzm7PbwvWdrcn9nYkL7FZzPgh1NmmDrUcT85gAo4SWiZX7Zj3e",
  "key14": "2X1nhdg6m1pK3amo63kvzJ9NssXvy2wLFPg2o5kcsRsepVtwNmPfgypshQ9N2WJYKZ8f9hqjBYejUMDYJE1Zdv2P",
  "key15": "4xNRY4UFYaSzmixWouuu9sP3opYFhfyqNScbMJt2YfB9Aw2e6YoD7H7Kr1SGZDiSTZJYTNdPN8D1djJnnkncvXZp",
  "key16": "55gZrd8eGn4qnVdvEqMc1FNQMb5BSJQrcS62mvyJ8t4wxXeq3j63q7Mzf6xsdMeuniZtw1Fj8MuE3ZS4WyqWwsMM",
  "key17": "3ffSrhWNeowjPWTvk9kHGAEfGYjGY1D8v5cCTaTpztUPWZtXKKptoP9NMv7eKRX1yRjPBLij39GhKgXrqQQMaXu5",
  "key18": "4abm9DDbiu3wHypWzdFXV6v1TBvwYbXQ87T5fTjAtXSaMhT3k1gUbLzcduTSw3nVrWfBgZEgJKDPmyoAohMjGtXf",
  "key19": "4Z4gbYVJZW83fBrS3FrccbCxN4cs31pnCTtLarSKcspWQbxN6kBxfdMEpu9dwnWCnjAUUMRd7SPBp2PuREB5FCD3",
  "key20": "4u9XzuyEfPmDpk91bkpjJa1a4PRkKZZWcQ4SXCCMWUfPoxUAziACpJGBjHU1FdUimygPJDRRA3Ze1Wz78DwdJ9Nh",
  "key21": "66NZQQXXbZM4WWdK5YkQfAYySUjQzHHwGxzAVC7772yypGZq2o1TcGS87TpL4eoppBkMotvJbV5wvo1Ev6A7oygD",
  "key22": "2ekVNPZuBBcMyhXuxbNSD579aoz56KkojEVVb3HDPvePNjyFCEHfNzLwCRMhxbqoLZs15mWK6Coc9FM7zTvcUJSA",
  "key23": "5hveXUg8H1L4hYsFiBfLBVTtWeiuUZ3pTeYFMXxRaVUqQstjuHcdnLSeYrfSVWq4wc6FWv7cgh3b16ez7J7EASTC",
  "key24": "3uqR9G9qDJU6seoXJBrg8AHXL2nvM4FehHvPTt2tJQ9LjHEm1vyZdKeo783JdZsnaaRWW1nKELRcL3Qk7GafdsYu",
  "key25": "4ydwdetUjdUvYrWJugnFAUEZ7emFuJG8uSBFvLvStT8C6P1jeC8buMdHWYBNkqDRceZ68t3KaWWJNUUAt3vSHG4z",
  "key26": "2MnBhh75ybYgqg5ZWudXd6iAUKGPhLJdLmt1B8hAN8DthjEJCwZwYL5wsi1kxBPavCQuGaacgWirAQP6epwsAwUj",
  "key27": "3FEVRWEunTaG91e3u8hfRvKpNzV7jqsTk5VedrqGydnCfKjGQf27AA2ZpDKQcnzfkfXC4m533yD6dkKNMev7wRwn",
  "key28": "3UQP5mLxBcdYq8S8mcAVWcHSAgx9P1Uj6QCGbNUQjQYt7D9ntTjfXhednQrwkA4gvngxnMV2GRHooCMaVx4KZaJt",
  "key29": "2XUkt5qSTmMpfArzcDQonrsTUJhAnyjU3LvbG9QpSp48ZmgLMZ7jwdvcvT4Yzxkr8JwJkk4JvXXTBSM8FrBMtEyU",
  "key30": "2TU3sptdCMn3SiRE16u4PCb8dVTRmV9Ui2EVycb27URZpiUwPSaFw27zQJmWYk5fqCj9xR2XjmRdL5wqU2CYXhy9",
  "key31": "3UCWb3UVcotvToung9Ru2UUoBFR7qS7iqJR1sHWKGEmNPoy1pcx4rhBoGxxQiVRJR428uojx3He8WzAYtJesjXYy",
  "key32": "VHPvWjezgNdcGv6BDtsxcewuUC3UpfAqWxf2b5zgpH8FZaSe2b8o7mGQddbCFpb8fVouH83zgF9vB4p9pD6LJiF",
  "key33": "3wpUcxpTJdAyrVDGc2M1Go5a7c912hBc8zifZtvRbndpchX3d1nKFmwdRxS3wDvdCo4N4R38UU6N3WZq44yHoemV",
  "key34": "2HYv3my3mJyRjGwJDXZ3H6UisoKbZ2a4iZKGSHRjtGGQT1Lvtr4j3YCngcaXsEiNMAQsJvznCBiuff7RScT4kXYa",
  "key35": "4v9M96YJat1ZWXf6nrsMNQhHCxEy748eag2zhtSYbQKYzszYknkGjRceybbNt9QwHdPnopqJnh4dRhJYNa433KPo",
  "key36": "4tQKUQHQXKWaYameYmDpygszxu7nvYi8DJChmvEFbLR11dwFhBAnpdSVyDtD9LaRqpbVaCH36vsqUd6DvzU4FkiK",
  "key37": "2wJ6Nnn98TzxS3RC64QVC5ifnAo4WY3tPhwuiAnX5Tm11csCYGrJfv9MyiqgSK7EE1Sw4JHvqGgKJwKviMcq31BJ",
  "key38": "MRedBiHaSrEMdNbqErqUWa31w728GgDFLEipevmJrsVFArak5b5PUZEMKxDrzXdojaYZ9Upsg7QgkqQAdcaNc3A",
  "key39": "2PtPMs1HDx5cuBarhNDKVJfZKKGYMv9wtpM72qXqkyFaRDXwZQ8qQZD5DXNREJysNvNfxtiwNhpoktFrWe8pdRtd",
  "key40": "3y6Phr73QN5S8fcy3UwjCsjdVVCwEWfer1odBpuAFBgyUoxeqTfgiDuivxHdCs3JLc9JgEbn1kgSeVB6N7XosBX6",
  "key41": "2HfyC635XyWXei5nAX3E1VzoFxyatDLLbyKadf54zL1VE2ZtLvU8NXtckNcf53TBzRLDXvzo8suUvjjEAxNFYxXK",
  "key42": "cY4cSpWJ7xoFb9E6UjJB6YW7ixTuy4SErdh4srURsUQ2ntUWWzjzRtu3H8D8r9HEMj48K1V7tqv9WFSUPMrsHTs"
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
