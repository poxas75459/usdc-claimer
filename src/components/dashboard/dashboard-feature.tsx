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
    "3jKUN8WgowajYh8zPGQe99nPiY4x3fi8CXGKDDSryuqeY1BPTrc1Q6HP9YK436kdqfmWxYHfrWoE1ot9D4zKWTwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4UskAxWWMqgx9UTqHkJ8p92cdFA51t9bRVeaCFdqi2zTyonAcTmwRnVvjR37EvkTTLqTzKmK6QeE8CnyF5x84t",
  "key1": "2Z7rVgf32qiUDiaXttfZrheg1UkdBAfvZrRqw45nNxMc2g1eU9Ts78tPaidmuoaLvuvM7Ghs9jnLaSAYE9FffK99",
  "key2": "5GMmZgeZNwHDCkUX5u1ju6L5iwpP8JzBnQTzu3eACuaBSgfe5C1nJbvEVHYq8evitDeyWBGUawWfPtJDGhw9Tkxw",
  "key3": "4hg7rfDtNeQsgmun6FvDY18UvmoYup7yw8LQepvC3drVZNdUgMDMcPTtHHapaSKT3p2h4VrpVoZS6mGe5bq6qDYs",
  "key4": "2Ddn3ZNGKhN6zP8AV1umfDA4i9b9krWDjSGRbeYT2H36Ym5YCnD9yQh9MRzB5WMMTWpcmAoA7Ka17Vc4KQJbMJSn",
  "key5": "4QHhHRubFE5etSYa4hfEyQLyztFGx8AA2ir2CXc4nC63Fc1UVZyhR3iukxxefzVRE8FZkjMw7m1d9JTii8DtDdsh",
  "key6": "56oh65XxxH7sikwU44GWRA8bskpuiqZ2kHV16v3zrRGna2BQye9bQwJDaGZgYcp1FMjD78zT9WFfRjhiVqpjqaiQ",
  "key7": "2w4HPWFrCqejFLsnAh6nAWKyXEEBhtrinUcVM2Y4MVP5XcVCnMQqtRBdQ7yetwnHG12jLtrACBWnetn14wUn1me4",
  "key8": "2e4HoWc5gWAo8sk4qt93VyogQu13wbTNdAuTsnuCj9CGa5wPCTz7WC7JRBbhrDDEJ5Bi5xihmf1fodf535e9Qiap",
  "key9": "5PbvmScB4PaFGgmw4BRgDbMR1BrhX8B8UkJtn9aya9uEqkHL6mJ1mcDVa3hgfgvfuvDspyCZBgs8dPk9ixPeZZmY",
  "key10": "5SG4H1E96DMKcuyHeQwgo3J7w2g4CJChAATBVuuUeAexN6jD6xQpW9UnjxUdBQ6gzBcH5ZXpwVqj6SvUGDiG6MHh",
  "key11": "wT8fx44RnTPJXgSJif6Bc19aTvorR9wUrx9QfA9r86QHvattq7Caa5UDJAVay3WPNcD5h4ZGrPqCez8fF7hmkQu",
  "key12": "2Jj9Y1PqXe5d9omZQpFPpq2QQ143hkKodBgPymeVxaEpEw3qDGGQaFn29SUQd4PmLxM9itRvEoNTu7egpqVdTQjV",
  "key13": "3YfdEtZJK2vHoCXN3Xh6GQq6axANX8nb4pYsAxJZb1Wfq12ptnpifbafzJBVr66f89i4yB2xb56BEyoWGqpCbNhE",
  "key14": "2F9HN7hgci28QAutZ4fiEuQbV5LJ7YmqzDmkVnaAansxswVS3yo3HpEqpY7GpoZph97RBznXHKsdSmof3tUi2cLj",
  "key15": "5am3Bvqm7k7n2k2y1Rqg7m9bmjhf9nGhxTfxxucdHvwjrudeuYfp2X3RGTp9XmZxTXaJWotahhTbX6BX9hzbF1D2",
  "key16": "2x7LYxf8yCe1shtjcrtVqLH2xZ2ka5G6C7XY3dX2uoHNTKrpje3nSDwBCzpGf7nbugG7L4s2hgppmpiWhu6k5oZQ",
  "key17": "5PhZU8YsUnMLRVYuFYzPTwnQKsybc4NKMh9qLcaTUJ3u9y87gXP3MJbDtxLk1xiJbYNBhwJjXR7TRYR8MoeQnPuQ",
  "key18": "5N8iuBqjiVBfZCbLWMmN6KS8DaZz1kNPLBdMwHv2PUsrgAoavGuVTsn9NbcZSWEXL2Dj9DPsDB5khznLBuJgMg7H",
  "key19": "2QaLSTtvoyRj6k5KqWCwjFTt22xvc7vnZHnPcv9pTfyvoLee17Nh7N9Cph7msLeZLBwfXndvhrpfuVDi617md7wy",
  "key20": "2DYQDWr3za2q2kzzNvjWEAhzBgRHLptrgSNXsC5rFSA9PCrVBtVqBftHhVCZb27xK4iSmTyPzEif5pPwdsoPo3fr",
  "key21": "4QZPFePmYai3FfiSPveGuf15zhF2FZ9TLAHStTcEBXSXk39GbJxJGYUU9skJ2726QebWWyTqL1Zk7ZpfBTbRfnLB",
  "key22": "5Xgzkr6Bntdfa2zQRYie2CE1cKNAAW6Rfgh4bXJ7m8gJHKaiu9NC53vVrUtSpoj2hi4Nx4jRPaYKmPnGMcGmi5dr",
  "key23": "4ksd1r1GVhc4uDcV5vo1FNQ2sTy8RMMfuUcQ3ajqVkT38nBXR25WBj2KQaRqHM4shtBngYNcm7EK7jnGxRakZr8t",
  "key24": "4GbiVevL6yq9S6hT8ak8bg96G4LkK1s1pyAHEvQRiweFw6u9M4BmQ4S84ufM6CJ6eRxXfB7xGHU6cbCCfXhykzk2",
  "key25": "2rwU8PckaRJw2HtgGHJrctGz2nLmbJWrcLkuVY4U9VyeJZVemjQb9Mp9zpx2jejroAg3JFZKAYEgnSyuJLwAiqjA",
  "key26": "3X3ScHUvozCxY4dmB7vJL9hU87GHtWYEyokNvfZZGhmPtgTw2cg1u1iThsF86M2VjXGcSfGv7Tp7C4eRotfUza2G",
  "key27": "5FLuYyJxRX1Hc1E11to1giJC5M9HF56rxREEHV5dZGYiQXCWfrt12bf4e6KNM6tcGzGtJjUi4NJezWcQHcTXFBkQ",
  "key28": "5mFeXo9nLGsWWfth7oKrRtVbrCpMjFdicwNW7je9wH4FA7rq9fqXLvpwGb86ibM2WRnVH2kccVoey6VAHoKQnZLb",
  "key29": "62EawNofiHK7HKXEWEjNsbur8dwGEDooKhuWhQrCRYJuTGmvo57oKh3XNuVWLUp6EqcB3gAo2qf7Gvk2VsmeRPjd",
  "key30": "31t5Pdgvh1MBCPe3qG8GmXdei6zLsTxrH9oT9zSrdignjXmZMkiv7Q8MnJkSKfnfz69VJ4vRbLYz9UUHDTFBem2i",
  "key31": "4zEhyzwCK7HFahJJgDzMBMEWtv7LYDJcXbZayE1ZXuyCZ5uHutSawVk4hm8FqhTX4es71t7EzjSqGKnCGorQtvK7",
  "key32": "Pfpmsn5gxW65eEY7Z2jBgJKh83FGZngffYFCNK9ATzLh7EVkuVnaFahXwjepC9rn37dfeB3U95yw4pFpsU855JY",
  "key33": "5mYAAmTHCUjyimcxgSDUcWRHmazVhbVMFMmsWaweC5PKzjhTCcxAj6DAgWtugeowgygK8v7pfMRoUSTKEuvewArh",
  "key34": "um2EurTGSv25yoXmdFCipqzwWQtt35ZA39wSWxRCbWFzjGQfg6ib5SipqZbFJ8CJ3q5PPZ6qwGKLtjbTx8PrjtM",
  "key35": "3Ym5mD8GkdKd1sK6hWAtW1UWB3qq5vaydGMKgyeJodTM2gmzRK31i4JrW6BbNXZ3e5xWqLiFczNKTG4eCSGUUGHd",
  "key36": "3G1HNq7dRFjhX5cKVfg8xHHUocfKZ1qLs2b5PCE4set1DFzYJW8xaqybETUJu8ADYMkEaYTam7FJR4tY12LqUH6d",
  "key37": "5EGcJs3nX4qCaZigtARoeRAfAdmkGe6tbRtC4qbwLSWgknwYyrqndxPfK2oQwpYrEhH8rTdunsKD3C6bH1CtsPsd",
  "key38": "5dkK8KL3WbjggxJKapgaM9vRXaxLmMimiqMxFunBudCKKzKy6gyNZTGQ1Dnvve3Zjwyg17ctqpZbWWpYAE8mWN4x",
  "key39": "2NSRg5Ptq1xQXKvoT1y9cJRxBxi1XhFai9yNE54HBuNDThauHwuNH8nwdhDFt72szrErdoppqtYtLRUZaqxdtWPf",
  "key40": "3r88C65BBunwrSUiTJeo7btywE3awYKe4sYtZWjsUnrfxUboyThyu2DKbZbhhiXHkcSwzN8DZ5RFisCwKP1VgShr",
  "key41": "5NS9ceYTEHjDvUZGcmiEEpTZEbPAL7PNg9Lu1y8jhTGaYptdPgmrTVn6cXxA4mCi532b4b4bG6Dj36vMQXHofJwj",
  "key42": "5kKUpXkUsLPsihGBs1yoZYEriDDazpvEPEn9RyshQKWzMoTtEMNvsg4c1dxRyxE1HviL8CdMxx3KdRefZcwFQvXa",
  "key43": "57WWPhzPEX9gyaKwKX4aum7oyHEVcfVJoVbFebqbxLS3VzU9JuQWSZz15KG5pNywkV3KEKFjZAdeqwR1HaTk2Bgo"
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
