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
    "59hPYeNqrrkfEpAZ1iUMzvSAYsuf8bn2ErnNd5DZb6AvUHVS9Y1h3Bpoi8D7UAy3s6NvAPUByds1zxc9xbtQbejw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrNLTNsGzr9BrdPZjYBArTkMTjAz9n7Wnaxy2EfVNvHZRbCz9Buv54q9USnbW2jCRhRFJiJQJQBRZp4t4phgXMF",
  "key1": "5ririge31XafoemgxLfk5Cx6uDS1QVbwDuMRtmNbvTn2SDKwyv6txDcLntcYBaYzpMAFEhHyVrj4fBas1DDhjr7q",
  "key2": "3QSbF8CSUN7xVRJL2m1BS9GEfTHhSWFQrAoYmPBxXvNpe9bCot9qApgjMZRes2D8ciZdhhoHay1bHwEttHcezdEf",
  "key3": "5U32UsofLg4AyaaD4KaAhsQTb3jx9FuRiAbBsDHUWKJqwJ633y54fmmg1KDbmbEsQRjQNKecMDDUr1K4o4hhCsVw",
  "key4": "45skcFxrbDYbJmw5Eb5ca51YjRtfd8pULTGB4zboBLBdFKbqHgd4XNuWf19ZBiijkLnHhpirYvD5Fq3SmJeWAiUT",
  "key5": "4roLqvHnsmLkyvXLGeB89ZEFnvXAQNTAbYUFgQoR9tJwNVaRS1egtABmnw5Vir8EY7NZQLpHk8GvRkEKRWJyWEP5",
  "key6": "5h6KzeTYb1i1iQUZSEhfRe5KBGiqmfDBtPSoGHkby2hbbro47uczEtHgZG59Rp8VZGQV9Hvwk1uF5i6vteUJuow2",
  "key7": "2wjUnSZK5WFBekeMsGNycH4de3zR8RJc5Vi19o6CoS9nBd4tnGemB8nyLVEcTWQ69p9M6cyW8o9LBYV8ZNDYvJnN",
  "key8": "k6wF8AV2NBiJbwcjTtyzniqyG9rtRnuJyZJK5QxA5DDt6GKmP2Pb9sJM4e7z26dtJX5NDwfjxxiFe6RG5efmpLe",
  "key9": "4n9DjRmvDHZ6KtcXXgeSq3AK3QMaU1T7vUAqXf1r3cWxdz6CbLBHoD8869sn2FGFRMncBotNcCNsWd3WTLegK8w5",
  "key10": "MvgPJGexaKjnu5tKKC6miAgX4bPwG5uzwAWPjXDzELAwYDGgyCSA8qeiVjwXPqvodj8c58hL23K5FQmF2i9h78L",
  "key11": "2J54XyqWBys61JHesWGZqsdQMV4jAPe7PTNWCKQBWjuBGyo9pcr2PC2efWDhi1L3SS9hgQGGWciBgRguKv3tHvmv",
  "key12": "4GVF7u2LokL38kywt8RAzxrP6P97RdhnVDaQF4LehpUP5REL9jEqkAT1yLoYPpWvV1LDAM76wWJXgB1SAC6vKea4",
  "key13": "2t51VtZDTzxWPEhikfVC1BV4J3YjskBg9coJkKi1yZwDugQhGawhCooX62SvR4dgKuWRgcA7c8iFts1oDAct6GBz",
  "key14": "4kyhfivCRgV7jRcNE1PuaCujCfrSqtYyfXTA6Sk3ASgRkaGjMRLoSAqAuMNcHBvS3nxrqrPFhT6kSXZyTHtrnq8m",
  "key15": "2iF7Sreq69vRFk9M6RHj89jSo3tTaadqQYbBeLfQKEYJZbfRBLGwRyzPni3H6o3NMqdriM1KCiBJinKFM555t58Q",
  "key16": "4onHk2Ee2A6zUakgYK6rZ59D6phbhteAAqDBGepQErF3GYQTgbqWADJJN9i9GL4siYy1NqXkukVmTZZAhzBDevQe",
  "key17": "26EJB4ui8Qsbe8qkUgsdUZvc1ZaSKcpRmwZtYXfAD8eyEfRKSGc79yDYoprN4H6ggsyf1TnEumDDqA1XGC13fCd5",
  "key18": "XQR7xKugeuh5HhsxQLRfo4SjA1KweLf5WpSs2U7WEoWFBqXidrscNx2b1hWWvJ3S25vTxKqeHgwj5fSdhPiEAoD",
  "key19": "3vu6KjMkYK6RnTzPs9jVcfKzgZxsjix1AgcbN7ZkWkTibFEpgFXwm8vByPXdpPHmEzV9YcDPxfNTpSSiGVSGSRc5",
  "key20": "3LUTm2QPaJ8tg8d9JcjENtfPmuyAq3zKWWwyUVac8t7jvYWHMKxhBfZ2vTLkiz8ULTtngT3hZTxqAjYJJGBsyjWp",
  "key21": "3GRsSbWEThoYhnoCC373cWX9VdHdM8hZKFq4Ny5T9XQZAYBpMquCJewdsy5RmuYBLVeQgEM4axtPS4UhDawsT96r",
  "key22": "3UBbNY8XMsvZzoJSWpy66KRyjKsyPYVQrRXKkg1Yg4embi5BHcc9ouYrQUTuLz3abHQAa5SHnTAR4QTM1VETzNcR",
  "key23": "4kqqJJC1UxAqeYTwZhvLQJa5mJ2RMoHFeoeTGxfpzCmXHCSMFj7zpqJFC9e1BkWyE3hVfPJzr1qrm4hLaN8Rhwhp",
  "key24": "w7TEpzZT9A5cjcmKqfKJZoivst1ao93DSGAPAeaCSvLP6ZMvu7W8eCjNPV3hgoGGZPpBBvyV4NaJAKkkobDCqRm",
  "key25": "3ZrLjVDmVFxA3xYAGLQRDFZQzY1cNb1co7nJa6n6AaMSuQpTEA1vVosr4qkhgk554RKX95iT4MRVcY246a5LctJx",
  "key26": "dUxXtYwyh5rhMQLBeFnLkDFHnHBVuqeGY2DCokHJ7xSkpm7uuc64T5t9Tj7h3w7Zu7h9YuXYJ2v2maBRKSFA3mf",
  "key27": "2pCoEiwM39URoJGyX2KQnzt91vuQud2AtZiTG1yk7VKuCnKDE3smwe7neDjz153JKz6PjmhUWirchfq6XYp2wT38",
  "key28": "5EKhmvzBAXsoQwQCCrg2hurFUrJkcaYrqHtKkub98zqcFJEtZnypZdAJxghzCr3swGGTekqNpDKf6XmRpGaNcqte",
  "key29": "ijPFjdRPP8WSS3fkQMfqUZwmeKsY68iJP85Kp5L8msmNA1LS627SpVsbv5yV5ScUrsjPbVFiuXDMna4YwuPwZx5",
  "key30": "3XBBPfqiSF7SkUuKoAJPhAyFKPizmdb11hi8gLWmqA1r9YDieXZueVWMWY6jjyKnBbywEZVaRLrwfeU6fPjoW3Zx",
  "key31": "58bmsdxYiVvR78kiLJiNmxwsuk1j9Y3Mw4fwJGpJLbemXpn7dRpAkhasEYJBWjJUYRhUbusDKaQ6HjQKL21CpQs6"
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
