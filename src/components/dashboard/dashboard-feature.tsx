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
    "5cU8QrzugoeEFc2XKWpb3i86ftPKShqF7JPPEu54A2BkTrkUd8NWr13pNjVk2zt12ZW6169Pz8Ki33pDbkxjGNPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sq6sasKXXPLZJLsCxAqTKk3abcRH3wgwzwdbcTX1M5XissziGab6QY4pxUmGbU1pLd3CXkiqZ4ZWhSc8PEX24qS",
  "key1": "5jhTBByroK2PhtW3Yfjk7mLZWRdzskXe5BmTYmiR8imxh1DqvrJ27Kvv8Qw5JR1aUeT66mZmLNgaVhJU8MghfRGe",
  "key2": "2Cfb3Lr5xi7wq5YzsP4Ff8VEC8C99ubzXQXDzXgfNdTj2WBe1sWApioCbincgWoCAzY9UZCesYwzchFjEzADHmaZ",
  "key3": "4voZYeuAXwsRWdoVJgfG9DHvT3Pt3Dynn4i3QuAMp2WR7MemyrBaj5JQNtoHMaFayTc87Vh5Tfm6p5LAk3Qkcdem",
  "key4": "3d6WMqE8ehWGNRVuME9eV9BYee16PUjgtNhGFGhZwEC3cSX3gbaL83qc5ReyUNYyLbcGQqAudAh4jRBzcTgB5dtD",
  "key5": "2JRjvt8LkSM3oYDfEFzSyKDquqcgiCLmAJny4mDgXeyHRDXQQRtwnxP6PJnxkHdnn4eSczHMRvdfy8XRFTNViMC6",
  "key6": "3WGS59nAFqhZnEQ7ABLqgT7sRtQ8GqeozSFmmo7vSga2uDfyAq7ePBhf9CNasP7QAc45QrVCRwa62j99dgntkNK7",
  "key7": "3NRJGQSTemLhPACHxcrEp3troFnp2XGCtnY7eKa3gTrzhMo8fPT1FcDjAjoJhCWqcvcC6cHiwiyf3G19vuagH9mB",
  "key8": "wjCGop2nPfcChi75d244j4EUpaGfjgoXBKvJ6e13pfb2tsLpVMmGvCJv8T3Z5sxYSgewRzrDZoceJtsVHL768FT",
  "key9": "2LjP7VcKybD1ujAkCjDzNrJMrgsg1s53w3CvZsRLdLinhu5PiMgwbiVWSx3LkdNTRey7wY4riDa4d1YxK6JiBNV",
  "key10": "4RKSc5kNaty7DHfwVPJLocnc8upnsVWasf4VLbGUVy4wjGBU9y6gNYbxpmemQh7xgBVPcjSCuahgYe7RB3r6QtMn",
  "key11": "58c2TseW1PQz15LEFSqqs2ChWNyiW1AmYQkpyoBtg49N2DqTVPM9N9xpC62DMGWWnS9y3YYABXT2x434omGd3ATX",
  "key12": "AvQUWoG5v3k5FsUovHejB4hS8JiFFfgfmqsmXHivKx3xSxNagQ8Rja8MYcHnMcdRdXWSnv4E4BaEfVYLQYRRa96",
  "key13": "rzkBKEnCnXyp8y12Sccxz9t1ebwJtP2Bj6ETgspxXAvgbTFPrTABDpBNdniTm9KZ5TjL7VeY1af3C23TGEtdKEg",
  "key14": "3ssgdpfzGfD928wKqamGtpypNLauZ8HjA9s7yrnfphMZG4Tc8kLDNNa6apCZfWwAZdiEi4LDVBVFMMxQzGN5TukV",
  "key15": "2ppVBdobTh51jkCgwwz4BVDUzvc6WJXAQU8xvhPehMG39bX9MKfCjjrawrztMajAo5MdyZPD1jT5RtP58X5ZUWsv",
  "key16": "3Kjg9rT6dkYwcGKSpm2XxhBxkTCRvzw4HTaUvXeDfCnbSdn4t6yqndhiYTjRteSoDzzTs826wp1RDJjLX74PtyJX",
  "key17": "K1ZJFNGMPXjVHbz5WKoFuPBe7yGteQ5GexKuFu2bNAk4fzwHSXLgq9xvqVDDhPGT2DFn9zHrAeq4QKDT7FQeRDf",
  "key18": "3e9Hj1aJxzNmBbJqTG7RPSD6RtgSrPXDPTo84KbmScvizMcpvLfaNJwbfjcsrENgrX6yDQDFs5oZpgbtjV19qju4",
  "key19": "3sfYgWbehGyxCEixXEaqTFLq6MjWQUK7asQJNFvwX3UpfjB5EkijAqF5CZ9igDmWDpxqCZ6vZvku4KKuvpKayxFo",
  "key20": "jMtZCycuGy1p13AMkJsLRMo2UbRinpWk7uBKwcUDSkC7oY8PYNnhXajf7qfcF5RRwtgCrQweEBQzwQpNAzy3fUi",
  "key21": "bxGk9L7wGDX4SpM3WY417QTzvZJAb3E1qFX7bRs1Rh71PG471X4kESg6QnUGwSHbzuzhgRWy5KBMocC29K8PcDM",
  "key22": "3LjPape6SxDNrPQKTsJDHZ9kruTnjE5zRg3JFSNXuG2xpRTYg51pgCJYNigkjQmuEbnzdgJwYQANARi1hv72dvqD",
  "key23": "2TMSK5aoRLfwFuWvNkvu4GsAvdMtaVTw1SovyNveEc1LfsLkNAJYxmpv9CX3njwHKFY7XyXZkiZ1eAZoNQWerdrN",
  "key24": "2hY7dmRboCYgeM5jNRkN6zNoT8QMEWF4cKSuCRDF6gFB4k8szM75pQpkXHZSEeAiJW8G38yrGgtZWjKdcQLrVdDj",
  "key25": "2xsCgkwRrcYqhn69ShHxmiT2FWZ39YdcZWePqhjqG2SZQvbzL188MbiVMjKdcHD63q641rM7qtoQKPWDwjCtWtQU",
  "key26": "jcwTcUtoPS5Fnu6LWZJb1JM7G55FNkaKL9KrDjiJx4R8JpDLr3ecqsJmWYDK9ZRCsFh786FRm9hY7xFF3jdDuzN",
  "key27": "5cHzggqbk5mkgweB5BSQ1fguhAAnzYaQ9PdnNrPBxTbB8MWRaTpEPzVqgbaqE9yxu4eJZ1eVwGLyTaWvcy1YAs1r",
  "key28": "47DSa2XC13N5QpXMJTtX8so8peJfjga61yYABNjk32J6ZFfaZdciD7T948P9rmiV5Jg7PF3UxT6AYzKsgP8JEk1e",
  "key29": "WET6jKB2zcKRamZLW2ANZJ1Se5a7CfB4H24mGsPEaATDrMv39crM9Y75QVTKVPPkEVFHVEg25TU7zwPGBBxq4hE",
  "key30": "3krRs41HMyiJix5tHbMBz1ZS2e19HfQEqWBvy9bxL5Z3c7ZrMdAwLdQytYvLsQaVgXUT5cgBEXbuRyPomUCo28Vu",
  "key31": "GEhbSDEmbuo4rD9c3tWKEjiVycLNDRLTGtKG8mhW6a6L6HUSmAkWYEU3MSFrJBq4ZL8M7RKmi2pXsVAjvFX6jh1",
  "key32": "5n3dv18B8qVSmPX7ZXaGD7KrWT8wMXHRarzgwMPR9GLx5nVwLtYrQMgKSKqt91MqR86dAjLQNYqEVfggDJWsk5s3",
  "key33": "XrVJSWLbioc19enRUv6NSBPBANc4Z3DwV49ent76bDDhbZQir6ipeLK4641YctztFE87E29TcqEmRAHRnVqTLqE",
  "key34": "PJdswgb3yow3dXQdHuRfHFkmwnXKerxaKrm7ZVrbBvNxAykJoj4twmfG1hy571srNTgmnZohGGMDTzCgVyh3W52",
  "key35": "3R38no6Z3Hm8NVCJG1JUPpxTGYfGnMa2iqQWKLtJXCWECjDQrTaPz5JBTkDzYqdA6cgw1UpqEirKugjJ43qnLMZq",
  "key36": "26RXB1vm4adc6tQcLCyzH8TFqxzRQbrM1KPcvB8R8P5tE4NavtTtFzLgQvy8x2fxmefj5iGEPZsCUjdJtjuJpb3S",
  "key37": "gTL5T67mmH3mVAiHcMoWd5oNvhf3xijyGP4sWEcW1uhZ1L7Sy75QfeCyhwKjz9Niqdc1Ff8JEKPvbi9K9Y8BC15",
  "key38": "4MXWA9GdjQYdqMwWRcoz8RbBrKGaWnprPr2UpdFFZpPY4ygUbyYCGw85BmedU1jCBzZRXz2B2NwN4dCSY9eNmw2h",
  "key39": "DcKB37QvqQwsQEkmWEftoGRRBKi8zaXcnXbKf5rn5L7HATPNepL7mGt5DDiDehV7EZQfLaiovBY7DFkYe2TqfEk",
  "key40": "2EQyTqnYQAnnPzXLkDMEyx9n32nMH9PcmZ6fBE5n2JREQqVrWBtkTFi3HLSQu8Xrifgh2anbpJNif7AaQtavLc2e",
  "key41": "31WvThsEJp5TiGrAR48YCsJjZDhpFWqYTpX3EgyJmHEXBcXQUZhhRfRYEDAvPjZUGAytq2XQTdjZxtZ1cYFgohnP",
  "key42": "4pPvMew8LTzKRkDpqoP1kMcfFJo6FCZ8UzbMBn4RJvLw2b77r3Jj7922uaTyHPBjNyY5bYG3J8MH8uGBnNY6ans4",
  "key43": "23UywoHhhUS1d252LH3n2NPYZgQJKiU1jtLjzE44zqYsPmVAPyhDYbavzEJwT6pSkxeLCTUV2xR3tYGHVh2rXPSh",
  "key44": "5h6Cb8hPVPuKkZJUUsTiEPTRrFvaaSKoJj9fuNfBDMB7cM1JdhP3nKM482YiioAYPTdw1KGuYdAfNaBhbrFk2LsT",
  "key45": "4j597avRfLK3H2ZdksauS1GFmQg3nXPS89vc6WL5aGcLJj8WykgxepqtbfzW183EenmywxYpMWC9tbNrpjqECcwn"
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
