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
    "5x7Qq5U7AKqupveujpp5FTEsvf83Sd3dCo2taAZgHvTn3ShVXXYrq8n7biZZ4HdpcQUSHbFAxevvR9HfBKGK2hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDTQ1TtdDaYPLJmNBiz9fqGaQcCmd7cht6oAvfanZshhns4hXKgxCTxF5xqQLXbooBLs2CzaiQ73LdDkkMeunXY",
  "key1": "9inLqqKHWQPJyzfrD4bL4bZKDfD51Yxjg7gdyj3nnQsiRgkyEVKgZNtrZ2DhZxd8wrb7vtd4FYCDBxUS8qhaZKv",
  "key2": "4TNCUWFwtezxaJix9KfGqVZme7v3rweRMm2MCnXBjy5R5zimyD7FseHXmaTxPMggSqCxtGMVnmt58aFgFn7bM9qc",
  "key3": "42W2h6H8aXwcnPsyr13xi821NDDGu8MkE45W4KipB3p3R3YnVZwie5CRJdrKXJVj4AAtzW12tbXrvtmA7RNq19Tr",
  "key4": "2sbuxgGjCgPtuZgJm8EoTn79mr5xNasXf5aFo6Jkqewrpy2XchYKiDnJcPGGHr5d8gHZpJgqwprdC8r1ycTLnaTz",
  "key5": "4ARCfbGHahNBmpqgeWcE5vBL7LG4Nkfdk91CKoPzYPYV58zhabBXG7FEeudb2JFaYmYQV8ZMjC8399DWjBep3kx1",
  "key6": "5Ri8Dhjcz94k8xCSQYrAj91B1fkybEH7K1C8ZTb4N3aR2MKAR5oxfNk1QM1kDagzu1HFPHbik8ojVJV91SbE4UDs",
  "key7": "3SRUDyizo83tjfD5icCENaobqHwk4zR1j38YinVELLYUAUYhHy9cXpo4SzobiS7DMnfKmVD5CN4em26zp9pR7Twb",
  "key8": "31hoTbk1Ez3fsB9yXkSZ7P4tJNqienbvmeDGCUgea9fyM3vtM1cUyQ462hphzoLhf83nBNkTsk6tnDCNVrW3hPag",
  "key9": "31Fo4vjeApY5UqKARjcZyrnPitndD71dbvcVNS7TnNbAsRknUdTmTHHx6SJuBrKMymcVdeHTYrBZC4gPt31kP36u",
  "key10": "4ggPPw1J1FBMXkWSCMxxXTSSygyeAFsm8uVqr624K1x7ZXRkLgkkdreX79XJSEKiwwSH2khx2EW3DyUNWAu5H2aB",
  "key11": "3CvR24KkHoaFVYnRtRjKAX4UqS3v3xCv2w8Z78eBvWk7Kv5vwY8E8fMCusvZ9PjyCrSTpgG9u2uqmjc2fJ3a4qo",
  "key12": "2RuB6msvNL2QZFBpv3C4J7Jjz9cwh2YqybMK4RCJ9z4psULYb365JfnSyyCLgSTKzVNBt5UvjGiV2VBP4FsBvcqD",
  "key13": "3m6BttkYFwjreTrbP9aAu8Gd4sw4A33khG46xEKCLhq79zoDLbdfuaMpK5S3Y7qTP3xbSm3UzRwzy7yjFVTetm72",
  "key14": "649tCtqDmk1t7UFTumeuDGu3cjB4jS1DfCVi6pKTzkPf2bu9xqFjs32YNCdEq7DeGUGdXZbhLnWWTX3SxpDxtpYc",
  "key15": "22zV9CKoMJbeD5hEwCqkG9L8uVfenREXcSbmhZxo4iHSFzFa3kuBjdP4MbGEbWCwWAmUYmhCtZiPf2Eei45wadch",
  "key16": "2C3TGh6zG5v48VNbHUynNmbUs8hyMbu1bqxiB9HexPVte6G4tcNhiiBpYcwueifX8xQJCjxd1cF1Ww2WoHTsfEBR",
  "key17": "4tQVsg5eNF1ThhjvXhtpx6rULCNCkdiE6uLHw62PDF831JaZHEotL7k9X71rBu4shTq6CjcN7dUKw6j4v4wQWLFr",
  "key18": "21Ew6qU4r9Uqp6QEsvcg4HVePy4B9gTWoWgYkh8iVcNNKWH5D9jynvbhkRcxZAsp43jrNp3AUWJ7tY3wjFYEoU3y",
  "key19": "5Z9VPY74DtMYy3To79jv92N76fWnHrWVfPwrbUq4WXFyM9BLFWFfcuPeewKaDFAZGY9e9hW3wnFNcfXENAQqovPd",
  "key20": "4nUuQXaBzpdPs83jyv4mFEaxptTAjQaH9WD2CGEFnzPsrdYrXLYNico6vawgVBLvci4ontDVU2P4tump2HEAccdQ",
  "key21": "2uz6ayQpDb8WTCjG2A17getrxmr7b96abJs18nJiAYJpCNYQE2sb2GNqwezRVfwsQ8kaeN7Xdcjym1zhPuLQ1kED",
  "key22": "Zg1sVm1hwYTQEuzLCYSSqDc9YDZqqYqaFC1aeFJKiiNkFLcTWALbF4zJC2YprB16Fx1f7QdVPBsV6XJWLWAoUCA",
  "key23": "5PQMweJSVUdZudhpgqNTMe97HLejiKwKHr1gNaxUQpQuSwk5HS1ARTzUWLLLjrh2Ko62E2WvsmRDBtZiNJre1Zro",
  "key24": "2UhaGEDHzg3ojnWwmZw1iM5HpHfbnaUyxqaEdUYzATncR9ZBouvJw46C5M2FH5XfwnnXZSiMJDNohrYX4A4fBYCj",
  "key25": "2QXAKofWXkPN9HD1WiGj9CeJ4Pnzr41hTjSTucfKNiqnzssxyyfrUaQsEyKqBzzwBqVvB6A49Ht86YDYxp313Q14",
  "key26": "MiqaZ6D4BAqZo3m6CbBW7osYvrwLTRoiXYsbkPZowLvYWeu7xwnH3Qs86GYpYPKBmyH5KWrSH6u76E2CqYesp8p",
  "key27": "tfsCdvVauoEHwuSLeSX3t8tPmjReeU6k6dGxS2KxnFimc3fNvir88GWNUuHKjJpS6SsMG7SzHcUfUDc8VstRRxg",
  "key28": "DDD6EBWvHSfnjQCYG2c9LX67p8KuNfQNg4uzLJ4FWwFFrXiwHHX1syYmE8hypamkZSRohGg77EybayrYZ6DAexz",
  "key29": "5TnVSZbdMKagBkZ4UG7CgfAdknsqEPMa6DK92BKsLo2FQZQNvXAL372gqnKG6bc1z1Bhzb7eF1MTQcPWNDkgP95D",
  "key30": "4PvYYp2MCXxrfu2q3BEAWfpL9MzKCjjTPgSAojWbi9skdqcizkUo9Fgqb4Me2t8LarHKeogsmaE6kt9s7zzei3wF",
  "key31": "5zi6dP55Vmazo3ifaGe31kTW3z2aZqoFBUpd7qdkUk45FLJLiydhzLXrJowE3Hv6V5oaThQNPnF5YFXtG6oSEyY2",
  "key32": "AWNwKLG1XCKpytP69NbozaBTpoY7sxLQv81AmBKX7LPhQ5bgyi4Vnu8FxExBx59KYE47ayuM7Krhm2kGCGvUCnL",
  "key33": "3XbtEY9sjkEmkZP3MJpLHFuZiovKE1e9bbHsMeJt2ciSxomXAborS2RuJWHLg7e2QoSK8kXAKoSc1Lo1mRsMyDVG",
  "key34": "4hC8tw31xLMBXpjNM3ByrS653rq7MX7ovxmx42i8ve18zBgdpPvXznxSCZyJJEEqRB6mBVaKjcPceZ6gqS99QDSG",
  "key35": "48EQaLABT2GnHGvhn3SehSHHTCeiNgx589gYmgZuL6a8o2f5KKEwSH9LbFVjo8pvj4ke3KD3G2pBfg18AmVtejdH",
  "key36": "5Rc6xSrJwh4jAKNBAAvfihcBGrXFGL5H7tytYichVY6DqQ6gkA3jJa9AXfow2imTkEBGF5vgwpMdUTME4aJXPQSz",
  "key37": "2qGcK5tQnDN12E1VAUDosjF2mfbsDPpVJC3zra6dqjSuVQ1Ez8envx2ccrbP9homb2PQP1QUkRULzvXyogvZu7Qr",
  "key38": "2N5fvQ28honY1cewdbBDwrcmzZvDsGjcS1C5RWbChoPT6N9XgwGSPfHJ5JyspM9ytMmVLaMPUBrkDMJqx4rivzks",
  "key39": "4LrVRKy3WADWDiN7ojkA3BbPUqBncSdpsSAwcYxuw4U6SzA6Zj1yuYLGQPcixtdU4nBs3f2pUWfFWrtk2iqJioz6",
  "key40": "2FPKtbPr5vG2qZjuUfeGHntzcAqBkoTtom2diUvvbhi38uq8qeCji9eis7NKLYqc2iqSMJhG7CYCLHivrvUmFvRu",
  "key41": "4m2TSR9DuRCk9AjfLfCJgfeQyRnqn7NmjohH5MSRFi8mjEQWfMfBgmLQnRq5RDPW3cu8P6sfFLAnurXPaXQoQzNn",
  "key42": "26h6nm5ZBnV4wUS3KiSR61mfe86CCewqdqRrDFBbmf4mev5uwHcXz6muoHo3UKNVBjVkKJ3vbANKXUWet5bRFaF7",
  "key43": "29fBHtzSpdMwqxWgSmKqE2PTyL22P4TsSMUXk6pBNQxPDeobUYAdMXhtBb3QnDC9kdsuJtZXQ1eLGYG26NVmnhtZ"
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
