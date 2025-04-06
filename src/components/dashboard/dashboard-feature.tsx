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
    "4djBjVfXoUgRJ5BoGW5yLc92PwszWgtZuSEPAb3SN3jvtqJU8mrmx5zd6q9wUdjQsdqeFCaWHuAbgfDP8nBz4cTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy5F61yoHPF5fAEBYdsXbTApdn42mKbmufPikG2SEosKrAPd5R9iU7Dwejo7Rgcgqz4xcit2nj37AsbDSXQkMLf",
  "key1": "2g2tVk1jjwLTVUfxHuymRc7tNuMq84ccLfo27fC8SywcuaCmriQW4BBgoc2q1sB5qBzNcsQ1u5JcVT22arYb1wWD",
  "key2": "vzsGZfHMXErfZbSSBnAHyG3pnKqiKoKTz4eso4myAu7V9Db1MgA5U4KbrTYSfAfYHSX7ZxWMhpDvC4WsZqF6sbW",
  "key3": "5MpFLHQLG5VEKpMFvPhGtozZzwKTzFneentYpW6T73SENqy7j6ESCEU6CD27c4G2k9hpieWNgaqLMkZSkepDWeEL",
  "key4": "5KueSmEvNiUar3xPKwT5PHPXLuksWM3seDhYDcnjCfgcgJX42vJ6GU8JnEFgDkkjwSnhJfetYd1bD49TzP55yeRe",
  "key5": "5W31t1gEjqodLh6athKR6PEmeNyGqJZ5J6b1FMKPdbevDGHqz3tXeFt7hSSuPJohgNoX5KKLFBxvcvgiNgNbxmYe",
  "key6": "4VVLvuSrEBYKe1x8n8WjfG47unqStRi9hS5BvBnvE3wawepktTyEXfp3TvWJt4y138gTJpW21UasciD7huYfLsWb",
  "key7": "2V4ULTJApRW8AbVXVzZvMFFscQmzcuKJJJkNf54eouGN3EJnNUru1svrHQHmCfgtksoffWHHtdZXWCVr4sPFgwMt",
  "key8": "4CqQN76ijMDjir3ZKZv2YN81wG6HyjtJpzNE9QwTB2rQ5V82VN8ZZDTEM2HwV2ry4Dp61XT3kZEtkn9XSECTo7Du",
  "key9": "3vJ3TzK4kmBVxrTLthf1KsmarPk2DA8KVHFeQhe43sL6Pqq4koM8PZUU5XcQPKdhV7FrfH9sXsAGdqvoYoALKkPD",
  "key10": "2unsPoAfYaaf2YGpYx1BXHxg3ve8ST4yMhy4SXhPPwVjaPDXcRjb5LHiA577evbnN5EH6uMvPG5EqDwivAuakaBt",
  "key11": "21iFfWJkpCXyM5rRDKdqdZskJyn9hHru5dzQAVzvPrwGUFjLTHhgCWFvHqMrFtYbDgDbtczHNL8o9EceLxRPz1iJ",
  "key12": "5AMs31GmpSDybNTKfMSGzXgTYYQknRC7qDkSoocyBBDadq7Y3uQYyFvqtTdySMuo4jYEVFytcRN7v9KQkagR2Jg3",
  "key13": "2LuadHbUYwj62q6g283G9yHH4wVrFxUwFJbWRfh1t7r7VVGBrhzQdQq2qxz3ry2SoJkHTkYeYBiiJQuxSGHvMcTA",
  "key14": "2TiibMWZNzwGQByaqJwKejB97qGVDG2QfoM3NgNTZPxPPtDjEonsJHffSTG2mju86KwPbubKHHXTTMbKtCeWTXi7",
  "key15": "5gnyPkex4CFi8b7JT9HT493NAF8asgeT13v8dLNFTduhQZnDbNCqYsNRMWC7MDmhwQV3etXY2RnSpgBDkR41hGix",
  "key16": "43CoPPgHh6gd15nVbZREFs68cjTmwYiMDMzFk1Nyfgn22z86sZNpkcU4XfJ87HCDHXP3ijC7zHAvbWeUEyPyHWuf",
  "key17": "2H23zaNrg6P9pxxuJGRXSFUFbxc9FMRcZutZxMmmTFvXMvr81HoUus2M8Nfs2aeYEUhHxADcTRziJAMQ2s6SKibu",
  "key18": "CgAASLucgndwK29QELLLtYGE4wCy7NbUaoN7JKRUHt9aaNYx5Wy6LkWiVkbo6JqJPJRPg4wPwPc3ZCFWUKZbYeo",
  "key19": "55NqkaJzmpSmvaREJpaiuN7cWoDBw61M836kVqufBZHjqUKMUvZTvBE57JPYfH6T5wvL2DchZByGStu82VQUb8AE",
  "key20": "5NYxGqHaWZ1FhWT4y9PDFwfbVehLDFqHAFuvRdXtGgZEbBiTtuoUy1FuRTxmFyAzsJpS248kgk3EBZzUpXVGFtP9",
  "key21": "3NzwPMsnpXqBSVBUbUu1ricQhquG3F59KW5TCHCzk4q8NZvNVZZnESZznKAyycN6E7UyE19NqB2t35Tcmvw4mVbX",
  "key22": "5gKvwzfFufgc8h13GqwMPYWbmRrLRu9uoX8yPqKSuhyAeukyT2HV7wFu9JbWcd9uV1wnBgg4jvEHgLgPA6aDfdZk",
  "key23": "5amysrRTtZjy5wzCqzhJqRvLFnPEW3oru1F9w3xV6GLFqzhVgw4yuYq3nx8hfShngqpdqwySG8WXtL2j6jh6vttJ",
  "key24": "2eAV1NDcXJpCoUHkctN1x3jj9JQ2EkJQk4VEqYiVuf9ZexWWzg9ZAU3Sb3udBVPj1d6x4s8aEVpwg54haCHLZox9",
  "key25": "3Rhy6Ex5EMp6F28WqJ8HfHbWGBggr4pQyQGLmArTo2pvS958kqCPTnNEQ6ahKtsfuCQCZJrLkifTnvXVEhfD3awg",
  "key26": "7VD3ei5YpuG5hm1VsPtXQf3zN843NhQRHpqcMBWQBWL5Mf75Qp6zR5mvEebLqWMTXjqGB3y8gEzPLCGLjx2p1vc",
  "key27": "4b2pRTmzncB5L6TSVbZC9vNJsSp9KuJipSzdpthgmtpyeoDCkBDMSHzY6QEZ82xoLvFj6WNoyEkp25JHio6r6vEW",
  "key28": "42rfCnGEK6SarLw8eZmbpGfagnL8XMSfM1KwNUtENvcKTSZGs5S2GvDcPD1GMRuydTNgCLf8WLafQ9hq9GGzpCTt",
  "key29": "3sqB4AHsF3Q1V2F5chcuke6xd7BCLxjLTioDMPcQZWLSiEgkfPtjHztn7rpz9JRynWKx1PDjPq3SaKjAvSEwHEKk",
  "key30": "4JFdqSWoxsTZSjxEYuFAdXLym2ddLkg3kX7PCVxvosNKJ3HrRhFbSNcCF3nZza7CsMxA7MbjGuJm1zLVqycQurhh",
  "key31": "4APTZfCwTXW1fX8gnbMBMGXpFP6yU4vvHDK2Yd74ExDBabA31mNque8Wdw2genWm98MTPF5hiy3DYGvA4CC1egXr",
  "key32": "tDv7At3YoZpjjHdNbSpfVt1o2DnFqGBKMmghpuvafhHk26BNkKWeMN2PEpsuhRREwegymbnWYazvdCjyrv8prMD",
  "key33": "5x4ECX3fSsQEYoK31oWtQLsDTEDBh2Q2oyx9Q5apdkA3tKKvgHvSNmZ7yFiPwis1A78yroZ2r8egS6Ro7zGa6YVA",
  "key34": "67BxQg9gsWmit4EaxJHUs18i8qStw2K8MfAVKxxNcLbgeJ3ELaEZhuRWYDHmS4TJ1VaEt2UX2SrpCgrjseKfAhkH",
  "key35": "3ux2j7PTkUAsr6RCW65KGvVuGzk6hsN83dYrg4KLDnRtAgs1nqEujXXoMsyrA9Ufcs58ouHTnj8BEbTKpZPfUwEd",
  "key36": "5jKmyYLyqEYLJ8duxeGsYLbNgzKvDDJjrifSQsy56hk5i94c9n2DNX7gzLFuP4wPpiPqbawfbc6gsvitUDVtLBxd",
  "key37": "Zv6fkQAnoUXZxA6dpz8NBHWnGn2RvrWgHGC1BEyfx39gYpyzHPQydjTsJkyxcF2WjrcWEgvivfFKzRVBoHhWZS8",
  "key38": "47N4NPyeBt7u4sEEX7zadRVL2Fzokb2u4uRBjMTNaGCSbbY26JstBHxsdUS5BPNYvaZYYGb5UV5QcSKJdxVKRY5P",
  "key39": "UzHk43bQJByNuopcP6jnRCuQT5CDWP3eafxkrWKoVpsBmC7hGQWAq5EMyKX5RFadbAtpLmRxca9zxJLeyu5GyFw"
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
