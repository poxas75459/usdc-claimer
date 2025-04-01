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
    "3rbztriUqeoHEMupgsUp5LYYYMjwwTNTDDXLWtU3CxQjmRf53Mg3JE93xu7Ru34MScNAeevkRGU8zzvJxP5sKGxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UF7EZJ9Z5qL6A1yHQ5B7AeYZehMqQ7VFU2S8Y9447r9yTHizNtVWMhtHdq8RFXfGdSCgS7Y6r1AhFXowRzrt4nc",
  "key1": "5zfUNH86icddsR95G6vvTzne3Ua8skf1jiMD5i2YxXbMk4z6DU5crPrSWsz8mpcBU9bZB5uNQVMXcpUhH7m3aKw",
  "key2": "3gzKNPGB5tSKYM8bHptvcroMmq1yvzS7AHiHgnoAYDUQtjstfoBkXH65vjJAGN5HuMXGAXNTfQ12utYiQPE13aG9",
  "key3": "5Zmh4kBMAxs5PoKYLhvjvPA12dZXprhzUrVMBiTefW196zWHoXfABemzhQNQdEEPDhRurNeUh5JjExo3nWyNuKwe",
  "key4": "3tbLGx1Ro5evXbXHdhjpxq8H85J5piXKqCnh5hU5gnCqBd2ZEpsB88SvteCpFxoBb9rtP6dxWE7tD2vmQtQ5L5wS",
  "key5": "37nSTA3RnGHutqmP7aWK1fFNxHKPMujfFseUy4t7nxYhd86VnUUT5vEXs4ZMdBMn7aqYhjWjAzdtJfzu48QbTTvz",
  "key6": "GxgkuBqNvQPx8nWuAfCtfWKuyW24usaznXQykm28NLvzEjjoTTCNGGDwGngTZS38r1GZQrexG5V33duXnKYyKxU",
  "key7": "NE2VECFAZub9bfLSS5JXCCJPvbke7fg8M3dqn1cmDA3iTurpzGESNHdkQupDGxMvY7JYiqprfEJgQ1v7iFraS5t",
  "key8": "5nTbfQkSQb4k9tTufzTMo7sEnTcB9hUB2BLUderfiEsFycf6S8QbakbsWT5L8ZkkK1tA5r9ubPZtPwDA786BuAQX",
  "key9": "x3g7dV8JzYM7VzuzssPDPqEmEWZgWHvrUyxz7H5XsXZzCgQukarYwCVTfdqk8k4jnH9aTUMMRxP4EVJ7mHrHAnV",
  "key10": "2c2mTfuzoFs6yfGQLpTUYkSJqPiExGN3EKsRkuXz8LCnLAhu2qg9dTa11N7aJPtLjDYYNQjbwQTEG4JRTKKM45RM",
  "key11": "2GztNZFJWkfeXHHQ6dJRqoxe6hQU6oxCuXJ4u4bLq9P6XMnscW3KsUiAZBQ8yQSA8ftpL7bvJZbtQiAJyMFP2WbL",
  "key12": "4wprCmtHmup6eBhVKESrse7kMoC1m8FpFkU24ptA6fsauKn3FWutncSFoL5M6MEwSuBiSDnwL1vPoRS5TMsRM45e",
  "key13": "4H21Xdvv2GJMa72YfcR6QL8YbAdriTh2jtndpi6M9rzzmqUvqwMKRfjjtn3HQTXwA3ULhSzj845AsHPQobf8oULv",
  "key14": "5qbjB13pvAqSCsnzpUoKNUGJWqmLsTdzta76e1jz4jqcGvn9vpRuR6apqC3UfrNyWpRNsTe3q4RKZkxdRFMfjMWQ",
  "key15": "2zuChzhtVsXBp38EPDfobFsVb2XtfK1AtHf86cEyncAcx3DURZmQs2UE3MKVVP26m7H2jrgtkYharC1rehDy7n8",
  "key16": "YHfM1LfgbnNq2JicRM7SVXdupadmfeZyD2ihc1iqxDmzvgJBBAvsJwT7AtNe8Cvkvw1cxKQkoVX72DMyD71qLB9",
  "key17": "42532uuu7BgKaAVK3suzB6WwePo5UvS3t5UBRuvBBD1YnzFVmnC369dzjsR8pN7kGwSmQSpaMY2wYPLcKgtrEw3h",
  "key18": "5PJQ55pVgms5AxgpPV6n4ekTzjGEcYZFMSnxzoPphkDw9NENPLTNuP9raMPYcDzE677rufG3Niebv9SFMxEK6mVq",
  "key19": "3ZgrE3q65WWWTXsV4uv8w3s2Wf6K2C6Tgosk2ynamd8FUXyamu5yztKfXohmU6xFA9yv3LWR9qu1WDd7i3eDdQue",
  "key20": "3z9QwDcaDde1bUefEz6pdsRyNvDSkXvVgmkKqngpmJ8ZyynTocFqPke3EUvMpMEoEb9deiRVSZnEdcSqK2d46g5L",
  "key21": "2v49zxmrhjoDB8x2Qm8jwNP7PWfs2pGMQy76fBht6hNnvJJaQPkgh5QwTQ8td85jsvzFQpvDb1jPrymdFgrV1fHB",
  "key22": "3ipx2k7KZiqpicaawVP48vs59zY7FiwA7q1eErrF9Eoi7P4bveK3FEXiZhq9b4CdAy99uuFXFJDBkv7VRRcDr6Kf",
  "key23": "5MhE7j2SR7A3V76C89xnJsyGePEXqx4JJw3hupnAQPssdatrNAi4pxEsRgX8xE8ARqiuA8EF9uSq3ivzCDuUAmD7",
  "key24": "2ug4bhg3YuvV7L89Y2Q3DbaonJxttxveFqWGeLVC4jh6Fn79CeS1geyRfEVSDz8T46Q9R6EkkMrnwUUyrWRQ9AWi",
  "key25": "5p48vmcP7ziEaciPejmMPoYKRatJ6HGYXepXSBdbz6BaLor3mDNvxJUfoS6Dw1RVqAFZcZw9ccXVp4wdxU5Jy1aG",
  "key26": "3m8pkDU7dUmQC2su545PY338Yadhxz9yikNohXQmf2xqXKgyh8zxnhPjUNV4PLcKygr8K5VpAey7FCuqQZfky7Xm",
  "key27": "2hAaXbMvYj7go3Vrgd59GzFTuAJRCHvrWCuvAwFDeCWAy7bU9aBC2uZPzhsZAGrQYhRUezN9LqyskpUteDhMxJZb",
  "key28": "48gUYeJPokbxrG5hMTokRrvWMsuwrJ4jSohkP1qYJVrezAPdrobcXynnR4q5bohgGdZeoaPZcRALbuyaeSeHe9dd",
  "key29": "5BRaPqpQ1oLVRbg8YXxkQq7jXTrRaRCFhaVkbrgR4ACQVfxT6MF8fHdoF7nCABdukofhP1ZJC997483PQUFcUsp9",
  "key30": "EA6JKzyZMXeqmgxyP2hYasPjjftAfs4Hc9BRYJ6KH5CKuHsJ7c5r9zbB3jT6VsSv8zz5po64J6nQRhQSkFosdkZ",
  "key31": "5Qe2g4VstgoK1TUPCXnd5Uyjg51HrVN7wUqr3cw7qY23KbuCwSsb7SeStFU64MUyYahLNYC4f19hSemfAzn37Xh7",
  "key32": "JUqDS2kjG5f1cHvszZwLJ2Vt19yyDZNW7sxMvQyP7bcwJ167ufmTAUibkRqutwaKaCqCuHjYxy3w785xh1YCShE",
  "key33": "xSAWTm8LKzySc8ENXf9DTtUYsjdRSjHMh6q4ot9VTD1yd8ZpJkpN9Gf9yaJvYgPQ92K27gpw4ciTZsuQ5Jce8ST",
  "key34": "2yjWgs2v2Up73bUgADrg8PLkWPSX5FWW5pLh2LmQxRNdvcQYKBbiCqPdXN1pjkdPo97ZLQ8LkEHcENR2e82Qxu23",
  "key35": "22BVJHKVFxqAparydf1w8E326EWGAbM7HQ5QiPjp6QxSygXAb2rgKEc9LMXxZdLThqAiBgLYrQ7g4S5uMPHP5Tez",
  "key36": "646S1G5VKGj1fk3u4jh43cM42b64Bd2SUn12V9cJNmC8vE8cvpC98bQRZTUmP2MTM6nnnZurKBFuh2ugvSukTXxt",
  "key37": "4MD87rZGXrXQmtxs9PiT6cPjSXYoNtXSTCHGV3MqA1VfMkdsDs44sCmH58fH1RRhmcVhGAcba1NC7SsfddnnY161",
  "key38": "47MC1EBjxSD6kHeDSxkVo3FfT1U3NwskJd4cQmfPv82JCwoj5h1nB6SA6MWchJRHP3mZvyr9mEv1hft5Pg3XawJR",
  "key39": "2FSXL6fZ19bSLDbmjbCeyrRmjoWuNRQzPfgg6qJH8KYyUePXoZoNH5ENzkTEQVsgkGaDGy3cqENg62P51zx628E1",
  "key40": "3gctzEfQiAogngaXKH397bQaUSBRJpowRkpaWLWyVZMxUJzq1Bttfaj1TmNgtknEz13gGMZcyxfejSVpVcFPE1KQ",
  "key41": "48hizbz4tqv5zGdun38XCLq9KoX8F6RkpjVynsBigVL9Pa5PWTgKazgTgvx9q4UuZoBAzwYxsbQ7WYTLoSPNx3ss",
  "key42": "3wmTmp26EnwjkY5SjAQTh8YqqXe1Zz9JvSxPucSts3ntVpUgHRbUPvSKkuMyc8TsLZfgMPkeStH8UcK1y1rzDiXD",
  "key43": "3KNGwQhLH4FDLGMPAJC5sGUQWHRmTLXrnSS8wLRMBpJBSTRKHGJE2nuZkkLih3F87PMec1icj8phT5Z2uCBQQHi7",
  "key44": "47V3GGz5xF7jdzYR3ti7FRGpzyuDNmddhvqcJrMTdK5i1YKaAsVoGtuU8QFJ4Wuv34zUotPKQ8CLY4Bk3vd7Njhi"
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
