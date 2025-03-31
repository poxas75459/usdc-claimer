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
    "j8sCMLbt92qB9p5T9kneY9AB2FKGzvjnnANJJoZjfLDg3ZRjHM7FPXp6rjjaicEBTtu3aeaPq8tZYuvy8cm799D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1nzLU9rwyyUHqmcBFKXB5n87dEXeXMwG7mvA6wnWjYX8r9zYVjHos5nPLDXrdDjTJ7wXwJuwSh5VMbwseQQcVn",
  "key1": "4f8w9CDkcEPZ2HdVPycftorj5kUVtDJVhHT6HhEyesYY6LrxM1jfRNg5oPgTt5m6Yk2amXdJUFWdbwJ2Kkc3rGeM",
  "key2": "3kPSZGUegfDehjBNTNiy9pkkeR9hsFheK1QkSM4CWbCaMWXDrfWrBoJWnMPahTuEoscGyGaxGVy7w84MFyfccGXv",
  "key3": "2GfeVnCoZsQVj3eYVP9MBjiBUuUE1KKhGzSsDqqp2WNDmVCrZ92ake2UEbRFAXxCKD7yP2kobzASyPBFPwM1HrMf",
  "key4": "4Siz2vUoi3EuydgqNqJ9LBb6GtL4FBCsmt58LsHBf9kKwoypxMmNYX6Vv7WBJ84m9QYvhtCDNYpibWXJ3KQzWgpZ",
  "key5": "2MYwMXSqoKT3tLezHxZ8f6gzZZEGHqXedbS7YwqJyfE5RmSV9Bmuke9BVffeDxBGoWZkqGMHpkPQTxz3penQ4wBd",
  "key6": "4oJXiP3hpZFkXWpjXHQAWKKATZFVodKDVEhXG5qpj59zTmbwUtX17KcnFh4gLgG3XjdfNQEEUwhfwxLrU4qdAsVf",
  "key7": "42oN2DijMNK3EFXGJMqqfVFfR19Du6r1UQJTGXrAr67E5nSk5yETcgfZh9Nou64ndfGSSnnaEKdccRnsbY7teNYy",
  "key8": "3fKq2NiGjq7sf78qHQRM2ue7DknhSpBn2iGDF7hD87YWY48pp88f6nmXsLQiUbbZHkhNJxUPTnJC9ki6oZsTEUru",
  "key9": "5zhjkx6yq9Pfe41cdshMK5d6XBzc5eG6RoV2NsLhsXvpzWV7ZJqBmFArWntL4WYaNKpPbmuUHjFAGBtYqZZ1ZkcV",
  "key10": "MGxYMxNWFHdYkvhZVgvi1XMhoE1whM86s4Z1Gqr3uqbu2SgJRSBetk6PTi2A1FF5BsAWoTqisSRH2BeTk9dmDuD",
  "key11": "4Lgkp9ud5vmPTHuKxKzXuw5zYCS8zSwi713vioV2ZPdaicC8GfUuVdDSgVSKxPh187CnnLsgUi2uw7Rx8E42KoFa",
  "key12": "25N67dJ7xeFCEpmGmJrfBUjsyp7iMtSghogGdb5RGWFFZGpdYtNGCX5cRuUWr6Q5CrEPFLiaU2piib9kHGQLuwTt",
  "key13": "5PQGcmtxc96NvbUABN3pP4rvjLW7w1HsdzR1r3cpydSPts1Qxry7awsei19RucahJqGVKDtC43DE2yx3978ARo7A",
  "key14": "3VU3ueYihL1TDTWHkTx6zT6WgY9yH4SjmPai9RcELKq3ofQcZEnLfgujLHGN8DPNCmdCXVEJuSHgYNGybp5zvnME",
  "key15": "35Kq4nAyfV3pHriyk3e2RiD8z16Gr1ePAcGN88r6Ajz3PjYrdW7E5PPEwjtjEXcfimB9k8dPQPHivPrWLprwuQjg",
  "key16": "2ZvYrjfnSaEDg7Z4u1hxJEziaQ72DmYtzeVmAwfkgDsGsEjyoUm1j3PDXNYypjVoSLLsttPCU5PJnxLnAdL2gcz9",
  "key17": "5EHm4oFT4PZfFh6f5ia53KVWyw2xWz92Hpct7BphzGfmT1mFQnoNA1YBSy7h1ieypnLNgm8aSgotAUyfWr5dkQx6",
  "key18": "2bBcdLn7iZ1uKLVbm5C6UovpHd2iSoyKW41W4QTaU1z6dQw8VcDgBN2iJUsXrMYAPZfXk6douMvWaAexXVHTKiUW",
  "key19": "5Fhu2VJ3Z2w6oZ6st8A5MAhwJxogGhmrFcD1885i4L8G1tKGGC7nHdBekGxooj26ZGWEu2GS2nHzLxVZTS8saaNd",
  "key20": "4hhmWDiaT4zr8caxDH7AjuE7oRfsQJEZCCFjtQxmjBcTB6tdQNXJ9U2eFwu9KVz8gWihLnS9YmcdcxJDNujhu4MA",
  "key21": "3U3YctcosxyjxDvNRoKQvoNqKQDYmtCM2MnCLe4MQVC4K64DJLUhGxjU2LgvRBHYJxd6m7x51GL56yLBv2SAs7jW",
  "key22": "4qYSwoahndfEDfSmGXUMR42QKDNARaNCVdBL8DM2uN3ZUVZg9Y3hvNG2NrZqYTCGBuuixWCFGj7xvc7MgTz1viJc",
  "key23": "3gX13EYjjQUjW8qKfeGwvp6JW5r6hVUWn3rnsVtQRBNGPzpXRY17UoCjC6TMBGuQhLAstNGyPuQNF3mMJhgRSgF1",
  "key24": "CoKnH1ZHctgMZVm6BsPD9qy4zTHSuGGBdVbUc1H94jqivKsGoXL7Li4tdaq2PqDaT1auAK2ao6X9V8TbVS7jLi8",
  "key25": "63Vj4f8eybNp8y5h8PCNKrNjXknJz9BmJjQ8sPHSte1LtPPPkaoFvQrcQyMXubo32243wB7nREw78Z3M2i8p5wyj",
  "key26": "fu6nCCpAz8PukxLoKKFBcZnnPdgctUXsW5f4S3aq6q53ANyvXke14jDwiwUivyWWeXir2yxsqSZTbGgPJW8JxaR",
  "key27": "BSJucX3SZwTMKK1AsgS8wRFQ4VpL6huwcafZJeStdmmQMptseLtYC6xcT2ztBNoxJ4wTVV4aQZCb8Ei6LZwdMba",
  "key28": "5WvhZJHrtoJHgk2e2zucVCLqZjtjEtncn3uL6qtUCePK9tuKPZa59e6WhwqxqLzWnfQRx2EzrwNi4HKsLAtBFe89",
  "key29": "2bkUzCDb7JMSEYfHaQuoYM6ZEeb2JDHDPhhwCen7fkJg7HTCMnmCs6FkNfAw6uD2pkwRvVoDyDsiVHq2zebcCFoH",
  "key30": "5TxpyctDZnkEZV7H8yWL8F5iHc8uUDLCnGC44hD4ykw5sZcB2T2ti5j8zFB2moV43rrFt5UQuwAactREYAqS3G6p",
  "key31": "2NV6XFW5VMpo7eib7MLdyvdK3KrfAYUKS8g1e3DAQptuTXwScsYdvYxHXMX7TRUj7Q4Haze673vs75WVT1Pw5Phj",
  "key32": "2wia1SgionqWk5mRVVFLHwVUoruGrrdCpHmwnLUvsoSMs81FfMusc8kxz8u9fL1bspjZA8PqJfgrLFsC5pFQpwJv",
  "key33": "43qARHMz6F8uUy5tJrsNi5ihTJ18DQuDHgpr4RKJqR5B3uGYAUj85Xk2R7aLf6DwweCLsj9HTQUfJ3KHUeLuj9UD",
  "key34": "Amd3Q5iEKRpohxV3uSwFSyaBkn5VMMGxcC46tY49BHyqpZLqSGAhH2pQr6TXCZAssyvTG1kgxX7nVKvcMcV3Xof",
  "key35": "3Zv6hXqaAguZwiGxnNLuYsB9dWkuwCGn5mvUsmukvEqQ2HMujaPhR6CGRtAg47NSyGQXoQ6Yk6Cs7a3LMhgLK8pJ",
  "key36": "45EbAcAHPJBCdrT57ngEqx82Qnudi8dc8iyhqaMAt8aE6hWHgv6Lxjj91p4hcFdn7Ggc5eLAJFJ2fZXDuwqsbfaQ",
  "key37": "3cbHTyVCAZVqTF9m7AQEvgjLVk37mGaas6dr8KSqyiRJDwzEHEU1Wa24q9fwWu4fZD7TnqR3GSqydfycwQQ5QZtE"
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
