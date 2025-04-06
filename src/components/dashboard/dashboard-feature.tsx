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
    "3aYU22ojHFo7AHSYKnRxyQAgsYLUxpiYNa2X7vxiGzsXB4Q23uHnKsKqbod7VKG1ZuZhzK49YutS4jtxrmzxpTYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaW9RWC2NqoaNsfLPaVb6n4ffaAgrZUVYCRXu2GReAooGRa5ynketbakfSu72Cw3ohdkjKAYD2RSa3DShkbrRZW",
  "key1": "3cBGTrUAwBYgA79mtt3outoFL5eynjNxq1VciuJAd4W12zD35JzKREc8KXceesJiNDTthpMbW6iE8Bc1FZT1AEhU",
  "key2": "5Xyk6rdPKiGodKr239xewmEzY9xHeziGbk9iNRbfuFSxcE8uT1NzBddU4R1mrPX6CuaApbt6XCTgXg3BcG1myWm2",
  "key3": "3eqxMi271emz1BWsPvTYa2uEywZer98j7X1offrbxbk6JEZefMjgrT7P38N64bTvCeXhZsktC2qRdiTpJmN4CsNd",
  "key4": "5zkzhs1fnJqSSMxGkCKSgU3chk8j295oGYgdJHxrYNg39sCk4nR4oPyJBGp5AQDXiVz2i3oMPeuVupb4z8N9pQ5Y",
  "key5": "TommDSu1NnqJDC34kF64pjpVHuuw6snJpp2t1rW2fPFfue9ZfQVNTBsvei6iLkvZhx48p2aby3Ke5DjMzsFbZ1g",
  "key6": "5nxaooPEFwYP5ZtDyuH73k3qA8vTjXJpmR5LjobRp5dGiMMwvB9rDBLqB7tBSGvT466tH9AWPyBufxaSzQ3fpoD6",
  "key7": "dbLS1S7V5ZSVufQratqFe8a653JPUdtUvMq7z3cnaPhntyTumsxot2H3N8aG5qUs4aZu8yw8QPWeTSriRfXPxYy",
  "key8": "2JbuAm4YobRcJ8tdzaREf3ck2qzexMVrKsf6g9Ui6avwu5pAFNWBrNqa9UwySezKd3B1s9jirLjLZxep1f33asF7",
  "key9": "2FEYtGoCYPVb562eoGJgtPDUvWrerBR6i8PL7vAWRPtDapg6ahcexiVd5Bty6hs5mUFf9JWFqn9VFdcQgruG2Zzs",
  "key10": "32srngUB7BJ9RSzh6PigAGznSyb5CiGevxHMPGCp2QRxT1TmL3BRB3nNfR5AjTZHGbLXLBLRWV2yg2Fe2G43FGy9",
  "key11": "2ACpETr64cVyV4FmiEq1U96Jo53BuLexynpDVH5GRbfqtHh8ebxtcX9vPoLnutYhZTiBGKuVdx6uCyhyJeTCisah",
  "key12": "5b13LJLwM9YYaDMv9tPsyV5aNRNTKsFt1ajqK9Qc4DvSXFiy2CnUyogqQau5mF3BR6BU9ZkWba19rjqVK7CStDra",
  "key13": "SZGZzuBLZLFH5KjJNnkk3VX4XBYemC5FLMxEbMzHoTVFjNASeNnT8s364C5YpYp8FKJ6HeP6jfH4ky9w4rqDdb2",
  "key14": "63yHNm6pzFJhp8LPTop7wYiQ9zfeAvC2j4zuWtgVmGk2PU9y8jT468tqVLaYppQooEwnmEJWLWjoCjwFQDcPC43D",
  "key15": "3ttBJY461UtTQoVapfKHazLH8DiDoYJKp9NkuDkhTLB5rDDswZM8Vca2FWnTqHSd95AwRvAET9DMDLRs2JssBd16",
  "key16": "5aLs2xXXYi9VpcCHRMzgyYLZEhxuEMKb9SKaYS7HpSaGdFQqHLVdGXVuNaL8q2Vs7vmtGZbPsEf47ptGYuaDz3Dy",
  "key17": "31PfWyZjpQBrh35iAtTUrSfwRKkn68bmfDDQTDe31wShfpaADkUJWooZFrsedHqsMmMDy3EBEmpdzxRmQB6BjKwA",
  "key18": "5mfKCxTRptjQERr4ezCWKL7xhowScv8trsAXygorCc87M2yvKq8JLhw3kN6Br8o36HkFayDd7zor75h563JYyd1s",
  "key19": "5NszLsiBuupn5nJbBm3Y4NBY7PWyEbVUg8KyUAUzDXJ2MVnfJioT2dYzU3SrF2etspMkJ4zgC2LBiBdVQZW2DZUb",
  "key20": "eQk86VVv9pBsB55trwoZ1w3rh2rrFmNRYdV2vuiR2EhFtWv696ngfyVFunxs8av2pnqqCK8HWGnHjyfi4Y7S5w2",
  "key21": "4v8TmjCs9qQqsoisWrW3h2YMzPKU9sCbcT9PFqmAYpdCKLGjRmha8u9hYp8vMxAphgaPbzF7vNbF7LQugZ7sMtN5",
  "key22": "5tQVmXx8gdYxsUQfcDguV9duHsjKftSfGFFt7FY8Jv2vcgw9gyxrp5BmmyBjkqEFs9QdXVzRX4sXyeG3xceu1CTC",
  "key23": "gU2fZDErUidErR1R7pJVzBLLqYevxbhBfmHWsYjs2nKjaevVBMM1NGKTzz32ebHFABM54VNYXotPiae62njzFu5",
  "key24": "5J1XdTuf7SyEXfxyeMnCvR8ga21m3USnmL7XFNMHVbq5K7uEvNTasnsYyVZZCftVy5zXTwJL7LNtRR78CZtNjFFw",
  "key25": "TLAHC8bgUYMeU4N9sqKDieRyftjYLT3bQe3uChMHhJBTbCZ7ZqPs7UMPXvjS5Y4Wr7gadeGUgoNVXDonRTtV1X6",
  "key26": "2eWbuy1Gv3XB9ChVhLUxf7MeaaSvzYFKSGrcZiFt6FvQq3Y6xPFrBuuERdFEMgk7nSHbXjLQCKjf9DNMHYjvkiJp",
  "key27": "2WGrnV4S3xLL88an6WGrSKQmGrJDdTtLAtFBqc25ssJcu2QHfkQbSTAhhrHEJd5qfkM1J8mkbRZtX7x7SFHBH65Q",
  "key28": "4NRinypigGdsV5eNYYmjTSkuEK6jbHBV69nezN1xbpcEj1aFSpiCaLBYPKvL2qcXE9H8hpdeZV1Ph7Kp7aBqMPcE",
  "key29": "FvjF8RMSVXwk9GhJ1rYQwXLtZfoBo7xrHkywkdNdM6EsD8EQes1p8KWfNMCySJcYTsDCZUCjTiC69vB4gB5jghX",
  "key30": "1DhhBLPaKS8SRd1XhqrNEM8u9wYqQGMifAJebab31i1fhjHXtLvs2K6uG8ovzWDnkM8za8YC5qQo4fG9RgV3ZiG",
  "key31": "ZKx8BePaTmookeGypQx93UkXuZ4B2qTYsuojYkwedLQt17Efher9RZgkV5m8BspUC8XbUE52rzkhA7SKV4x2wih",
  "key32": "3K622uU2EyLcSjdJuGjA7FziBoUT3fMkqFactFAnHV6dfbeApejtShKHzkSsLS8zJTgFnSbE6kupAuCwYuLLmsy8",
  "key33": "FvH21hC1u6V3S4QWqzzyZCSYHRULHJPmSy5HRE3n9RnbhP7YnZiWMCzM3M1Mt2jNXD7wB6yZncXwkNJ59tcFgrf",
  "key34": "tY8Xn67YEqwKiKm68MB6SE3hiqw8tdGpH9dsyS42h1MoB1sHZro6KMKDHeihGarBd4imeanQmCjnewuGvWoVC1b",
  "key35": "4U5YePodHARdszikFmyVVdw8gcM4a6CbAvvpuRDbHgF2mzqScKrXrufjhR5fWTmdV2svPg8y8YCMCuaWkqnVtjmc",
  "key36": "4GP1RECS56y7UTz15qymBDSRnaBwQWY8Z4YbDR4xpxEbkMpZ2xj4A3MUFqCnPGYCTisEsgpVL378zkZBHa1L8Vqu",
  "key37": "2YYeeUmDdyrasuRRUg1UPkmWUiTHKVazxSWSUQDMfteoubDqYAgVhhhuPV24ixKuo2juLbACvXFYQb2yGYpBh35x",
  "key38": "xQi1z7Ni57UfnPb5DjrCnNQ7MNioxxAgcBritpmUp4DGpuKFwibdJNLbUe2aRqDxCzr9UnQHfxptYnTTNtPV19e",
  "key39": "24uADxwkfL7WiCKXRKAFSvgiZsfLDTZF8beAZDtD7mZ7bP7yDcc3K3uG1esHKatEhGggni2ZWhXCdcHoeZWL4zED",
  "key40": "3hDxxKkwP6JGPMg9fLFPx2uj1iEPvwQBD3yq27KfcTAyBiwv9Hd24p658SXg9JTqmdFLzGYCDQiem7JXUPiKrneV",
  "key41": "5d588ntDcUs8P6cTmMJ3kbkq4YAKd8Aho8MqChk7fqX8WjuMkJU9npbEngbTyp7SXNE2zRgUr5hnNNu2q8nFhjop",
  "key42": "31oRihcVDPSzcsXFwNYw4DSZ5jLiDVTHZdsrQPe3N1DBdnvmsVToaffQHmkwVdXsmZJjvFkiTCzn3NjSqkCCndaV",
  "key43": "2Rw76GnmhDqgyzQrLzZMwaThV4upvUGrsvC2Qq3eukQVf6a8r5EXpFBnNkp4wLrpLYZaiLSbKPRCRzqaESXm32EM"
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
