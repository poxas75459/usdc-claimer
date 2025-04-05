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
    "5zPRVqSrQXoyYePnqT4aexRwUmMd4YYBdz6NgfPXFEBPWiEN9fHoU3nnu61wGMD5iMqGGeds14veFARqESKbRbt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1B4Ao7zy8d4cYuGBZhXjArvcm9A2FjwSGs2CjU9LPv6DYoWkscTgNWtdyQgfAzF5cUaXASHZSQTZWSmBrdtorK",
  "key1": "48W11HoBXYHJc6cqMKiwDWvGpv4LJ2Vk6HByP2gf8YccfPfJAtkyBbxrTzKm86N2aJsPahzGXPLURXbi3vgtmbC2",
  "key2": "4YonYoXCcsNNT1YGb3BS54erEYMwdWAjpKFxUaGQqtWcKRwBmEcEdzCTqUNPXtc8r5VB8Fmu7frhBWoAvxebWxwb",
  "key3": "62PC4q8v5aB7JDuLshiisv54wdm6CqsCyws12dv6ZvFdjU23SnopcU3AKkxFbUGUv9oEzxasGQ8tnLVjJYG7iicZ",
  "key4": "YCDVRiiGZhEAuSNuJiVKakEgAo7hpSMjfyKRKWwspt8aQ1qgXQByXbQvmSpqo5UHskQgTn7abFWikWwhTpFJPJk",
  "key5": "2oB16LXYvfbQjYKXvuAvsvWtuuAoBgd51TGT5GwJKVmc5pUJp4Fhernpvpf34xXkCS2mii26BZbFRsnUCmFY8PPY",
  "key6": "665gTodQmjyYvTphujFJ9L8trCn9KToTD17hpW5PuoyRG8aAcCpLr5kuikvZjvJit9hj7pc2MJFaDNHiSv6Fk7A4",
  "key7": "5ZvSMXrb8RbFJRHJbzYwqQrz4oatVMVicWsQoVJP1Qeibdz9KAVSvmHWDGnZjwA41H7vJsgMV39RSkYboLbKmv6G",
  "key8": "yarr8GMuUMTGdiYYaqckX94cvYkaytWRUvta5tUWCLjxSdL8HDrVqZpWpKK8M5U3tcEUiywzSMQM4dw7gPb1Lve",
  "key9": "3VpRjbtjndraDk79YZ8beu66KeSkMFZXsFVMWcgcjae6QNQXjBazRAXno8KszLpPjMbf2hB3v4sbMaYZTBY8Yn8A",
  "key10": "5VcZLnbLfKez3jbXXKruhH883HmxTwEWQQPP7Ar6UTqCHBGWMYWdbMdsggPssnZw8vDhwGaHLF3hC5679drWd1qq",
  "key11": "38keUKrT3PjSVsmLyuLyRVr4dxwzDPE5jMgEzNm6hSmk4TAh6iZPyGQGAz34ppE5T1CrtApWnpG7ZZmqfHuUPTRy",
  "key12": "4AS8CWc21T8cqEUfP9xrPXdUQLoVtT7kw7FhnCkXubg5pb7rTvxRicq74bSgMDCYQ1dN7nSRW7LcW2X9hR4GkKEj",
  "key13": "2gTAmbMvcEZ3ifqxJb2NHG7kJNBAdCpdf2uUysHe9HeM5kKTTLrUCcHPSqhk5XaQeTsfRV2jrDeFEYaLaZzrbo8h",
  "key14": "scr1G2CCdKRs7DE1FD4NDxzx33jaruTYT9PJK4iGY2q5hcxwGXR6ZBse1ZY3ZYo8vzt757eVkFAugpcZmuNZKrx",
  "key15": "dtq5KFEXDjjy93cegPJiiaHSEfLArEoq8TMCGU6YbTFoXodSXRCG2Y8b8ewkhfD6ygDJGwakznfaUU1G2rjpu7E",
  "key16": "4Aohzy2Z8GXPdtWZJgVbEynRHzB6iJ8vJuAAeVbtxNxeaBcoqQRchcVnZcAQB7ovPM4DSmiEETqKXNsm78CYrwGb",
  "key17": "4WX1hcGvoERritjipwNfPzcjDewvamstYPV2VEo6di1ecPYv3XRQz7NVUgYhhRJUvRsSPGw4msHMUxiTQQ93uDFL",
  "key18": "4rWa2LuF1tpztmHiHzm1SJTfPwDd97PcgM88Xbkj4fVffYoohvRiFrAxFsqc1JCkRfJZ2qmAABbfFQt6DBm8k1hE",
  "key19": "3yfufp9baxhZYS2LuFY3XunvVXo1E7dobpW6UtaSN5pVsdBNcEYj9ZjEdXg71CS8JUNBFdpbocu8kPNryTMpiLC4",
  "key20": "sXjPE3NLYvmsrSky8Swz7CYVfqnCJ3LYFKjejwZKhsRRpsLPdGR4RDTZSaks74SRjX1wvScjnU7t1TvXHXtGD1m",
  "key21": "VeJs92tXM1hccHHRyhNd523wMjoK7MDC7hjD6hzCGtxzYkaFxZYCKR1CwS24EiZHvJxvqzhsYaiHLFxTSWPduMA",
  "key22": "27dgns3TJaKQYD62d8zv3KoJwT2LmiYd2gUeSSuVE8nxuo27uWMpaWZpHU5JwAFjB8ScgEh72ssTTEK56oftPKKa",
  "key23": "55CFHQKrrDK6pwjm6bwxNfvfHbESpSx3Wov3ZGVtiqgZ8kzNrtrhotSt4v1jzC5yTWYMKEd3LCiFxTFoJ1t7oK1W",
  "key24": "D9EYWk4dBLXB88Ei8jowFnS1KpcrNzRfGP96dxEUXdJWMXStTx7JE54nCY6qS4Bf437JZmW2oWEDeCdLeAVmbpT",
  "key25": "3QbcC96uxJNbPXBxUBe96ADeAwm8yuux6PCFakGQWjDP4tB9rRXfKNUMea7X2XURJe47NcsmKNd2groWrLbmDxeQ",
  "key26": "47DJjmB7wVDseMa59PJtuVqchZCAAguwzMB6Jk6eJNEnge1Stmb6VVG2vnNZQM4DeYZsaHLCB77GYYNsBEnAFfCt",
  "key27": "nnKU91K3RFxnJaPpVsMfeHAeeg9iTAbhUcAQQ1KSotL1agSyrPhySVmWEe5bphWfxB2R4yPAoL1avA5WKMgy7Gx",
  "key28": "5QriHbgwDzkWtGr94pxa1j9KFML7xxupbxjQDi4deqdSEnxnnsVDaBrAQb6JcdWuRBGUFWfBjgS5a2iMZi6cRwDr",
  "key29": "7Lzatqf26jTUfzzu1mjQuHiMPVpAQvmBCsNBf6LhvcE9ANgHzCYTjr32oXdV5vnbbbbYQhYQMPjvQ1yxnecFaze",
  "key30": "riUKbJ2htvQQwX1uVBAKzkrB5PfEarG8bPA5tMzr4zeSuyrRpZdi5Ahij4JSe3NNWskMwHy5nxLvo7QcrQdvc56",
  "key31": "22TaSGMzbMANSTDB8MKKiwPfqzDWDh7enCo1WMgCriZw1bzJ3XnVKM4hpg7mSxGhSQijKGebvhXVc5oaDgeeCJ1j",
  "key32": "3HDizGpG5bcAHYraUEGiQL1gNiTG5P2f9adcjAsfZ2L9hnbCmMgoMMvZ4LSdcu7VVnhoffq8iwejy69MRzTthikP",
  "key33": "4KDDRTi4dvVMKUEeECpSPnzgooPHyef1GDWnitYDzv9DHNvoabg88tHG9nyihKqGvGqD8vDEp3DwPCShfSj74xQF",
  "key34": "5MCDSkRB5UCGMVnUUmNEG2KawLfxJeR5Nwi72PVeexyKav8586vUoqvhKSsq9tj5YUjSTqpEAAPzHkErXouJbAaP",
  "key35": "2yRhJxtLLvYxVqQxi5KdcvgxkyXSvqZgLDhe3WFENYxwzWRDH3ynB1yyt9YpJWGTq4uuWzUFrmGYZ67N9neT9o1t",
  "key36": "3ViokY7F2dH6pspw3tcth2REYynysTQxGb2YDi1QbHNTezAVyPKN7RBdP4GLgjbXNac88QxKn8NHwEeg1ZSiHFq",
  "key37": "5vfaopd3sSAmdmEKzpzcnde1UfXYm2eWX46DVQ2AAW2qyrjNRG63jDk2y6QSfXqtQaWeNAmyuFu6cshXSDH21Eja",
  "key38": "4XnDwVtwazAdFQB5mqyRop3CgqT3zkjN9UpqLZVNXEcpyK4ZJ1SA9aj7ftojoCBdCmCRgkWgfatoEHyvJJeMWYeT",
  "key39": "56FySsLfKX1ZiQ4zXm42RL16UcNVP1MaGPSp3o1GFYfT5gu5sEhKUEYFCnanM4v5TGAefApLEgTRjKBUbAKciHJd",
  "key40": "MexVSrMsUKudpgNrJweRw9wgzxvizRrrpmY9ovbygPiSKpnT84r46GEsydDjd1ESY3iczAuBGMB6Ttb5y1tK3M1",
  "key41": "5Wfqi3W9oQqDmG1Cxxs2QwPvC5ig6sXGySzuuHhyiuJp9MEUFaz7sNkhoLuyrgtZrMkaH9xmHVhiB9i5e5n1mGVd"
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
