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
    "2vLDqEmuPdUU415htwq2fWYMyQshXe9N9ec68izhjPtUcm5nxytA9pEsZS1L1ots1xXETTtUAbiNQyCAcBQk9P8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzZwNiRKbXUZ3kdyfqqxJ6EU46fNihmybZnX5CcQADAK3TNCjMStJcohQf2oQ2LnTvmSNet2kFeZxPxT172rytA",
  "key1": "28vUys9an7PDpZMXwd27owB5UoMPkThPoFeyruNkU8TdYRWjkethnePyXk9i32PVPJ2MQqc9AoBBPya87TFHSoDi",
  "key2": "2g7GQ1isymtb4NdRrkHV6eMEoW4CRk1ragwbRjzjfK1fUdeuCHQed6XDyHLxe7yUbFazmD2LrrnwNmvQRm4WLhio",
  "key3": "jdXEoKt7WtXgtqdZpZ7DW52TCbE1isG3w7JtmPthy3BgvzdLXMPivCzszs3Z4T7SPuiP2kd2icEDUwb5MsdP3DU",
  "key4": "5mzqF4AXxGSuMCuCvxdPhbnvNKF9JwkX1MfU533tj76xk7WJnmWQbghd4FgKH4tz2yp3oELq1PHCui5EVTZ9AgTz",
  "key5": "5uwkXUXy3Uh8BAsxwXw6b6KvUTutL2MRya4qBf4NGyJgEwYAFwEFutJ3YSbT3KAyCTEHdFBqU7ARj2qwN4qubRtr",
  "key6": "27BBzkCLcQUzxguFEkCRDmHH24uRLAKnEmFkbQ76o3VCtC7Lu1HuJwbS9yWnkoJEd1FiLWcTSA9E1MjZkxVBqaks",
  "key7": "KvYsYvZ8nKRevLKaFiZ3WxMLrFNXDPxk8VE5zPKQ3Ji8M22HzoALM9MavZ5jHZF4twqgR2AHm12E7QB4uybRiHx",
  "key8": "52Zs7GSc2Dz4rxad8TQySMhLMm1sE7rwKFnKDn5zYoj1GDRV412uWzDH4riLCAn7norFmGdRAg8qks7XcFTNZJ1A",
  "key9": "WKdVUFaZRPJuemvm3X4qv35bFU7dBZL93XqhmgFrUYJgU1mFKBM4T9MVXr8vM8xXL5my94ya7W51ATEVHJbn9d7",
  "key10": "2onj1Paksi4BPzgdbeFXS7ECJUbDKgeZjNCvFUEoy9Rs5Uj3PgqM9HP6KrX96gJPH9biEwJQ4BbEGTZMC81omX7e",
  "key11": "sLmWiATP5SzhWEapfj9K5vDfjw52wERR5Coetco6KN44rVgJrWHhqHgdzWNK4yU4zb2M4NTDY6bF1fTWWFN5buX",
  "key12": "29Nmg5mSyCRJSZxWVP8usUN5yZMPAtFwJV5qMsh744zArxyuYLy3TmLabgetSoQR2dyR88DG2qfKQsEXq3LZkV69",
  "key13": "2NqZbyEQWHHKr3uEeKtU82v8CJN473HNscEFctUxjySoMNfxsvxiBHt3SCYUyLwj3EnRQqhLsNFrg1pEtXnNttZM",
  "key14": "VxHHD4GNeFqHfnm1sga1o6qQCNCjQKvBtrrG8o8GQCAJoP5GqotXXQ6bATuM6sdz2kahWh8jK7CQVWcHsL9e6Qc",
  "key15": "5JHJtvLy2B1n7b56r7kF2w5fXuvrhDQfBa5mWBfZw5weu2YcMbbu6E7UdpmofnUjLXJAzZhjNtcaCSfuodEij1BQ",
  "key16": "4oeC5KicycpSHL9gKmiWrjY7NTsagd8LdCQwpjjUGEWtv9guh1ishr3iquh8Ewtd2UsF7GyeNroBVdjfXCRZBCPL",
  "key17": "MBVnPyyBs75WBra6rEUMHXBJ5N2dCHtsFfjTbQoHrh3g37r8hmS8RTDGZXQBs8C7C5cRVsTid9pbj8DcrMqwfx4",
  "key18": "4duw2UWTQaXRpboB1DKCxg7rUQumYHwEVThpu69xSY8FVAR5vJK6eU6xtN8AvcPw3jKYbQC6arp3wEbLtf1SQZmy",
  "key19": "3ofsd6xx2T7cCqYVsMR2pJimNzBV5hDNxrWabfhu4r269J7f5B5MJpEd43AjFALYBaNzTrEEckuAq3VDjdw7usi9",
  "key20": "WmGPNSxCAwvig3jv2fdMfTiFat9ign8hCwh1opL3Ttmm5R34n5QVpeKzrYXwDBFgqgmZsoh4TbGDdHCJjQifbRy",
  "key21": "mHecZWLXbKV6iJUvR9f5H2UdNKNLHNZiMQY8xg3vhQrW4DtFtfw2XQGdaCXcALnCtwTQLYB8NNNcSFsAxGGncgn",
  "key22": "2vCcBb3BxSb7MhHp9s5hbBcS7SzXDE3yURmnVLbevLMn3RmNmd6sVzwKtQXMGGCdfFe2PQpuPX4rcr8Y8mtRyHL7",
  "key23": "2Wo74WrEEfuPiwzVdwuRtpLrJNCLStBdB39s9t3zb9QmMnDTgPq5Xdrfp4mnHonT27nV6z15HiJHq9YApg7RppRy",
  "key24": "637WzxSkKjNwqJAyXAX8arB3oZxBSLiUYwPerJXZsoDBYK2pNfYkduSjCxsnMpeq1b2mfaYutCiDqXcYpMDd3qLw",
  "key25": "2YSPUoCmZmnmX21EhjP1LFyqDx3BoFt579RfUvoGq1Ge7eBEKopN4cTetNKxN2cMAuBWD92jU7fv4HbLS9ZaBHca",
  "key26": "4nh4k3Tit7aTFYCwysdZqk4E588AQrrK3rgoAze5TF5oXCkwE7iP1RKxGJrQmQiS7dNypiwYiszA46Yg4cjGvdk1",
  "key27": "5A9h2SBZCGXG3k1LfWyw1eYwUX15ZwdQz9qq6eP4k6447JAgxEhx23mQNpuEmAoRjQTP222x8pijNAdsr8RUzbSj",
  "key28": "pFjaoZTLaKpsttaMxYWG8xe6SXeKw6wfo5Z31oQPbqaF6r21bGuRgZe98Py4z53iJ9qMsaPJWY8wsX3Zr7ohy1Z",
  "key29": "4gU87s2nNWArzUhYzEBXp1s3K4bXo1ToDNC14fCoDmX8dRzsGUgNJMjUuRT7qcNuXxNfkYDFj7U3RDw8PVpCLUEw",
  "key30": "3QFdrZx8MLSfcB6JXMZ853DGD31KiwrCzmoi3q9ZRN951HhuiJsj8z3eQPaDVt1v6oNpWtsav5xRk1tNFenHutLU",
  "key31": "2wAGkLGLN4Ukt5TmgBVQTnbKWMeQnqsieUwiNKekP2qyYEyBunkQjBAkjVUwGF4HwKefDXQAfvbGYctXVQqNN5GV"
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
