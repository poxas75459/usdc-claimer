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
    "22sDpiLVJGdKCu6wLNnfaw3Da4snTuYevEJcfa6TytdiZxJwi19uHbRwKgzyAdKiEvKhXEKKBpBYo7mXzNVvy3Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33fxmYwTXjXoBngDoWs9uUc8A1qgzSkzXzZzLcxPGeEpFzxxkq8ftF8rKPxH5GT3myJynsyHMF42ivApaR3tK75W",
  "key1": "upEDK4SJJU4Qaqbxjbx4gGa5Cs8oNe9pbhPyBYcjCV2HKiSNQBUTqDNTnuH2Dwrc2gjp3zc43xtU5stiDeRmZzS",
  "key2": "qQFtr4xVTD4QsHwJ3eB88nk2M4f6GcWoHKAqFFkf7gNCLTdcYsTD4aWJnNFVDrwtMHzYHRcTV56YkScviS8wHX1",
  "key3": "2hz1YvyrU5U7XMvaUdQmzgkq2h9L622iGAxzc4AJmxYU5XzHQXZNzmam42Ju6ECD4usve4oH2TBNKgGT3Yg5ATPW",
  "key4": "2etMU8rNeCEon1VwQrsLuCKkdMFEvJZKcG8FwPz9KpGH5yK2Q4epoDVji2XB681TtjSrR3Qx6R9WE8NSivDbq2XN",
  "key5": "VaxSf1ro3Rnhtr25spk5AyrEEDMquyabQmyqCsSEMLu8nxQTuWLAL6LHvEGiTbLvrKB3eQ7uEvVVGxEVar2CF99",
  "key6": "4sm1PQceJVt7KSipnoU526Etrr6684sKxxa77zUa6pCSq5HP3fuA7LAFBVnA3TVqip8upyVeZQuyVMBHHUsSKHws",
  "key7": "2JAbn3P6UTQBpAVmZrdJM9Bv14WhDF78T5LSsiek4Lu5bCEpo4nYMSCXZATnYPMcGcKHWamLjBFNHNrSWSy136DL",
  "key8": "5meB5Xd2U1vB2qdXz4k79xbJGmVrLxVskShYdrJMYaXbuCKGyEgzNW2J2YUwi3FfoHnScYsxv3ie2Gw5qU99knQ4",
  "key9": "3qw2AaBjjSa3SCdMBUxS63NgJS8rL4iSMpK6ttowGavxhxJm9c2T82g45dA6RfWWnyEe3tBroPDqhaaNfU9queG4",
  "key10": "56U6wjFZv3GPebpro58Bq2ENpen2i3ArC23777Z3yDaJrgt4nccRab5qWTJiW8PthVjAMEak7y7d9FCWK8omMaBb",
  "key11": "616V5qg8kpmxrVG1v7DgwvYP3DPDSqhcZ3XNevdHhBu9wCfxNJiNJDARCLHZHXBZqiRgCjZ19Kn7yJxCmLkjWnSe",
  "key12": "2X54hkWA3QtgcgUr3GAQpRF8Mhy8UeGPgcqt7mB46cr7nDALBHpVuVmcRthZ49oGCd8rUsgmYHMPHUnCgQfGp65q",
  "key13": "3YS1swqJddfTP5zrXN1wRdi2Zo13HYMEQ5VbYrfg4Uv3nVUE9e9Q7mhwzNAe9sbMCrjB1UPCD2Eh4UB1ww17TGr7",
  "key14": "3mBRoGHZ4gvvREwhyKCUUsfbYYnF5CZrysEbDCEwM5Bseq7h3J4hSG86jqejdUCPFh4kEGQg2KpyH54BTYWtNKw5",
  "key15": "59UGSSD5rmPomGZn4C46zUaHxPyidqJ44GkxbfxVDNqgSzcGq1o1P16JN7Kbjc9nWj7bnyXhv9EWrHHxZsxfjFkJ",
  "key16": "5mVwTfrrCy9huPjtPUQPngk2YE8tqsCzJT1AMwpFuJjbxWCUV8Np5aEQyPP1bS4rZ8x2Mz2fSXwqXGwjNPCSEaty",
  "key17": "2SR7wyUynm4Unuc6mtPXTdweJ7PrBS1PzRrhsfziZVzowSaBumparC2RbGyGXBq41dKge5cfYGLEePhLivWDvhDE",
  "key18": "3JDMUWdAgaRHnsDC5oVUEPJ8v9rQuH5HgtaX4pK8x7TyLQSmvjhdeAhFwryBM5FqwGKdT3VDhu3ZZqhNJQSkD7KP",
  "key19": "5CcJdCiAy5gxpgLtE68A7iKgvwksbmZ1H9exUkttdkT2AuXEbT7QFJEpNVXbBxx2BKy9MMnBxPmhQYkFscP5ktyH",
  "key20": "3MJUmj4LL1kWbkZ22GXN5PqveZT6bN45pfyFE65M8GxpP24FViosUE3Yh7ioPXQmoHXWXymS21WX2G2gB1ZKoXuQ",
  "key21": "3EBcNBqhXFG3VqZzVkeFfrRp17oqFfPNRjfNUEtZwznJvDPeLjV9c2h5xbx7SxDCnrLBnFxwQq8kYty49TkTgjzr",
  "key22": "2Fo9Uwitzv6vvM2Wo16crnwQWnUsLvttQkGfPsxru9oYttQknQsN2ysEFpPwgxK7DRfaULcJMWGvmxWHfMpPmBDN",
  "key23": "3mydakx3wc9Kwfnmna5tDhCcgWf2sYYBvrskqYpcvk5gMS7DsuBfpW9qimjHGeP41BARcvjFbEtFyJF7kmAVTiRs",
  "key24": "e8tFXzsQcM1it9rqLu7vZg6bEZqh24xRqXUKMvC8Tugw1fV6uGmJJX6QcxbSqncDLm8jFVft7MTSmYRSLmYGetS",
  "key25": "4eqXDY186ABwNmHK5ZcRnU6aEs2Xvna1o7eJoio6ZTjdMqMdan9Q1VTv8u1N1KEqx2YagRR29k6BRy5V3k2qNYGk",
  "key26": "65RxKrskhjreeiRWLQ9eMYfTm36ezfxyX4mrWfYaTnzCBZR3a37xVB68TDosNbcZHUiLhmV9Pmh213MCHEwbEpZt",
  "key27": "2RUtXkSeF9u4UbzFcfiLL6i9sPEoDHRyoC3ebAoyed4BVexTWcjMMSXEqGBLMcX3ky7kcnRwokxKuAa5oUSycMFV",
  "key28": "4fTw9Phy3FhjH8k6LR3gPmMyAc9Vrb71wvf4VBonrtDdW6gXqpamZ5YZS7WaGDVvuCtsaN63Rifo7PRf6X8LHmja",
  "key29": "2dUHbRgQPPxNesXhkQAZih4dZ6VhecQB2DpDgRH95EnQBTYTEEKPGoup8jzVPde43nFZaHeCum1q2C1AyyGB6Fki",
  "key30": "5GZaERQbfgp4httor7PveReJrzVxZq6Jxu4HeQhCEiRkRpc9ZxUoPWVjLuBxWrmBrFRbAE84ggDMiPZCyuMUGWLa",
  "key31": "2kMLCcMqnje3EsWRGruh3nzcRtARbQWjnBYzfhkKu2V2wagB7YgFD1bh3YDaZQbxmRDuEqTHnRLFpFYMjk3aEwjS",
  "key32": "G2t2Tn7Chh41K931Bt4p57orpHMunruGqCD2Q5PD9VQwHPCN2geGJEZN9hAca7cgdbbt6DzhmBqPEEwFZFQ6xdy",
  "key33": "UarTkxrK11RayFTMq99oiMiQ2qTpHHx4McxERdGt58JPvfsFJKtrCwHhkjcT2wqLmWUdxWwetV6JoberCiPmm4A",
  "key34": "2HZRZ3GdiLy6iD1WPt4MQhMbxc7gUPnmdbckQ3fBT7UjCbtMi3CX6CauctzEFELUwrfVWGtKg6ZvpDHuNv1twyZE",
  "key35": "4PHZPBtEmmwhgHvcMng2y9BNWSY1JNgBVENrzjQzzwkfSuTiyn5CSxK8R76kvD7wBBQVkyWBsBhhVBA59m6qk6Fz"
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
