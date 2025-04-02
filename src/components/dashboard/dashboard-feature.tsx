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
    "3B66M5bJGWoJWZ6DogagsfoKCsdqrhESwSZ2bsojHeQjeZWbDTzdgkzcZZJDNZdC4e6RrFALmQVkHnSo5JQUon1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFYd9ajrR3nFXhcPeTiDftV4s77pC9X4YZ1PD1nho6cVvoE5W2DcGCmrUssibbt5jKB36GSjLkStU6cMUKz8R4R",
  "key1": "3dXjpvFMQpbgTUBfDVhh5vm33KZkMKaYbsdD9Q6ZGJshKKFmividLKZxZt8Prsu22cL5JtCGWqSMpCa1HHohoaa9",
  "key2": "2Fqh8eooEQrnjPidecAEZSx1i4NSy9iTTW419A5shA5HNvXTKZ9v4gBP56Uo99cZUGqv4yAefzhQW4K42yqCsUnT",
  "key3": "2A3n4DPJbKbFwLgJ2sv2kfSqaskfCSZNFCB8P4ABNQgahJnKdAVbvd9VUSFdXnxdvQdmJeq8KkaNhDY44fnkEPuj",
  "key4": "5hYqHWzatzC2x2XXmUypkDF1eyoFCKBkoJqJeYLLkDtdYMh7JeZxGYbqatX5KN7XE8UAG1R6UXiBqN2fhsmA8D5h",
  "key5": "XmWb52N42k9LKcgSZLDUjBYRDMoAzD4HfH8JeigqEw1CBCo2K5AEBghDvmTSBoSyJxLf9rZXpf6TEh8rhpNUyQq",
  "key6": "58QyNCQxB1TgduMBaJY9QRrzea4Xh2J2ShxdFabBY976YfcvX2MNKsuAvxpiWyzgcf8CQjVM2xnXpHGBnR9ApJt9",
  "key7": "5Y28pXrxREnkgsCqqTmsy7SEw9Jn3N6QYtxgYab1MuV471Es4yEsYhziPJUMEBUcpHttncMskk7DQWVr6M4nS3hC",
  "key8": "5Dravhts1jAGEGudaBR2c1SLVxsqn3FzR44191AuWuqJZorR47FUuNvrqKQnViZJjHaj4m5t6PkeEcDgKpjN4mZr",
  "key9": "jQZHUQXYaUma4dRaEhw1bSorvxba6tk43Rj68QkYW8CK5R88KmFcM8zGoipms4K2mcGfdPPiyzE9MoGoCVgeHwq",
  "key10": "5tdbxpvvU6Sy8RYvHqQPaAzgsvymWsSUUkZFTbBqKyY9bG9TDLs8h4Dy63txnpKkXnSJF7QfxQ6ZzdKWnvk7LBCt",
  "key11": "2bZpc3Sf18hCbLZYGLUvUrCoYzSt1hYTytaxjo1WwGiuna5dHn7S5zbe5UFUsA7jrXqf5os9eNG9Q33tT5SAfgzu",
  "key12": "4rdgE9hpDEVMh2ZqMS1x1wUwKGrCiL4jceBTjjf5igx6o8j9GVKHdJukjUiLSaXFgPZicJkJExeayewABgearQTC",
  "key13": "3jvHKCvWoC6S2KuqGcqswbpvAecGRCq3avJVeP1KLyTPBqUMM6awn59tveg89CdS1347eXSbVPAvTd7AvGpRwsfa",
  "key14": "3L7KhuH4KfwMmfUGqzHPNjcYkpBNqe1XWC5rQEfuudAxsr556FRzhGobCmR1V1QmH2sveNtgUYhBJJxzkQRWxqUd",
  "key15": "33GVnizBc3QDfDNz7CK9ppoLEPemZqCypmPffb6VWpj3v5AdDwu8yhwSGecXafm8HAkxzUWsos7F6fds68hAje73",
  "key16": "36g9nrfAkZ1EFU33tUkTy1cMZaZk6JS1UahrATebeDBNX1hdKAPsiK4JSChHvXZrvwXzsTs7XrTSkN8Fif5k63GJ",
  "key17": "5BH1TQSefgnDxxFBMUmrL1qSQxbVg98GxE77CkyypHWUxgJkSjNh93SoVUoVFSidKRP7dFHQgVnVPAE9FRg1MQfe",
  "key18": "3k85HL2qrxR9MdAVARt1JaYMuGKhzPugh43itMd6xbs3hBciTnuPXyw5c1kjwoYY9aaDdSqAYVuz4AEdwtRyhwqF",
  "key19": "3NKxGcwJhftPH4DL7DbRtRPq55oGhYAjEQo5uCxh5Cs17JAef4cG8YDXa2arpWLui5BePYnwR6TCqKqDoXFcngsC",
  "key20": "uvfFPi27zTLmg9gFvNQmDswGuNdBDKMw8w2iK49FxMU8Rv3tMQj8H3UekH1ciWHJaH4rNem9wWqWYWa5JGWuJZG",
  "key21": "2dpcPjsJ7gu7NnEiP8CiVCXBmEvDwWMD2JDRGsU7m8QfzEgoFik3cCocB4K7SKD1b1yijpcTK1xpUbyos6m1pdXC",
  "key22": "vcAmYAxHVUszSqr3o2YGNNrfPLKSzR4m611hR4JSmxxeSxKiaJXsVYqavrK6fhVMj4Uur4wiaqBCwMnGfhX3vzB",
  "key23": "5uGeykCUSH6e87L8QX2rbwdvx6hE1kKGqW6gvp3L911LK6NvNEfaQMkCugemp8ThzAR19zP5idLFWGkyzkWkdJKg",
  "key24": "yHa71Xsr4RjVwPvnuGbJDBpE9abwB98NHauEGFBRSBHj4dWfTnk2c2zka4SbbACBuTrG9MXzDwjHEpa1NBWhqzv",
  "key25": "3CaT3VC2EwLBPu9wzD5XEoC5UjbKZTJwGUw7pRvzgGQNsXtn8TDH6e8oTrwJniXaAhDJqxkTc6gBTL7vmTTLHoGz",
  "key26": "Nx1QKDxFrHkYWqqntV48qLZtgHDh2dkyrojXuhi2dhm2ZM3kgLY1ecZRaufe6SXWTve21b4baJEkLy7zvrcvCeh",
  "key27": "2PjDFqKjtQwwHXBqX3odjsXgRR3bn2PF3xNXjVQLwXKfh694CHAQrda2avHwvxKErcq98KbisH1BUrYKZJEyF1jX",
  "key28": "2HzPrM5TWET3Xw9uuimG7oAW4fTUbsEBx7CTjinNAta2eAJu7yvNhoJ4RJQas9s47QPAA3CZtQ3akJUMzTvn1YpB",
  "key29": "29R9DkPn2aK1oPgcfiLmK3vuGW77Wi9BfwKZuWCm3Y5PFaySQc94bSPkAFPLv7s2613DzMX7AHz3UUwmakC2xKem",
  "key30": "vbfVazwipb16SpzsF2haYuMpJoJBSWyLVjMzeNE6UwuM3vdw8PW2BE8midex76Z7QZpe2LmzmPTxoEQHQ1pw9GG",
  "key31": "3YR2hphuFAwHh7joi4YW81Agb2Aq6DCxdqZSaqNyo7PuwXnpDyhEMJLnWdrc52yjAFvnvP5Nph1Wo6vkNtxpNQWq",
  "key32": "2jUu9RKuJr8gqkU4kMLW7muP1Y1uZVF1ZrftSB6C2Hgjn9KuFfvz38W6D3mP6ajScFzk4HqoDBJCHFMc87WAjyb4",
  "key33": "L8jzx72tojLRjKufcKegPmAAPU1Z1JKBYU6GXfEQybH1FNC5H5gaLkNpD5Prfe4HQKSb2Tp5xkE5XoMGENCTrpp",
  "key34": "2ngkrf5YmKX8ZPSwgA6t38SWHfZK6ZG5PU3rZsNjsRMcRoBpYG5nW9SLFNvN7nk2ohv2i4nrmTGd5KN19FjbH8gN",
  "key35": "4Ewp287xwVD5tf5ArST5oTA5aTfR1GFbVcGz6R7PEb7J8FpvToLU4vtttgTe5rgK3jhi2M8h4pmcnGJb6A52GxBM",
  "key36": "EPt3JjaHGLRZfyK47BNzotthPHmCpkWfLMMgdGNEP7KekpnKP75JQQqTN6vf6LUAgbbCXKwZDRbeKioZXqd8yMg",
  "key37": "W1E6mqGcVyXWhCCFAriQ2tGUiKQo3aZAuggt1gwPpX1Wa84fhHnHhpR5nQEVVt7RK9cCvrXkGmi8Gs2ruHCrwCy",
  "key38": "58vPTFNh9MdMhbHm3kxDPhfqv56koAmj9mzYKuTGs6T4DJB8DmKrVYJfZJHwbUuTAwUT8Sr4Q4KDY8dFSnG4vrZ6",
  "key39": "41d18U7odGjNZjUGrimwpDTrFK1myGbELbr7d23tyj96QnkycGScws6wcJWhPM1Zy1uAh7ZgyJTrDc9ABH5PyWyu",
  "key40": "4JDRHaeGKj31gpW86qHwVyar3qoTSVgdEh1AsLSLHtGXZ4S2zutTG8HWAZQfCnGrgBFH9RehtxcBBepp3wBD2789",
  "key41": "4vDgN9pzDTQxCAGHRyhMj19E81YQNrxjhcCYTbk2yD9aLpPugz9LifjbM4a6boidisa6s2P5XUYNVG5EkzAWcYnQ",
  "key42": "5oq4hzKrvnj76kw39U3vDHtL8fFD7SrPy9FDAKrycEjr91qTjRdFB65pnGTr914dQkLcZBaHQquJyJGkqn2i8RV9",
  "key43": "2TFLc276NpR18X3EEqZCETfBgXMx1XPreXsN91A25SC2DamsGhTQEsUUw6bBwZThB2mnTo6wE5Pns2ApaceJ3KHR",
  "key44": "61Exd7aaPb4DrdjVdSieaY5T7SkW7Ymn7c8SUtYp27GEiMuHQpYaKV7XL5rGig9A3ktBtjyEbxhNCTyoVmtYuTAG"
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
