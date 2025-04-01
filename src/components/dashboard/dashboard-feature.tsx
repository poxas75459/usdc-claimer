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
    "4V8XRQpFRxLZBK9j13Uzx2C8sh7stSkgTi4P7WhV8R6uMvpfbcNDGFx7X64543UfwCDKtzGRVLdAsq9jNmzcqxmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uad3FhCeCpx5MG4AyRvU2eEF6RTr44eQwyxaiJyM1TKvZ8xqfY6Q5BtbCeoNhbMMVo8CxJRBPWvgaRhsAM1UyW8",
  "key1": "3Q2B2w7rtYci2tUDYb95CixJzMnHV34W2c17iDkHBPdgdBpdrZwbJvXg2xyJT6vveDmYGnU6S1zZsgEm1MUfA7H",
  "key2": "55cW2gx4Ub1aA5mkyRcT2aiZX9os8LWR1QL9CoTAgs9Gy2LkKUaEmbrn8divRdGZjNR8yoTgCKsnRqgWrEFeiJKV",
  "key3": "4yZ3ssCHFbCd6ZBcwQrsmfACUAAH1xzUWmzj4ggGcv7sk9WWCse5sJVcRaJg7diB3ZuimkGR3LZfFgj1uKtf7Y8W",
  "key4": "3LwoPD4i58LoU4oX71m64XVRxMq6vEVLJmTNzEgdYB2GhGGDS5pfjWh6EstaDM73uhYD38XLba7riYjtQzAFvV36",
  "key5": "3eMWJXyx4twDy3osPjCPvfJFRZZNuBeRmN1njJMzTSscoYEonQRJAthGG3J2P3fkLTezdAaJwCMwu1fQvsUZVVA4",
  "key6": "2REtZBHTabioWpRd4JkjRv8Ue4Ae5VuEg9KN1eXmCPBKW24A2tWJHFHgd4wnsfAAcn71TTAvpEeZKkydAnx1KMNq",
  "key7": "wnW5imoRthgbr6ynb7kwM8mqWz694Qk8Zkwdse9WjfBfr4Z6xgkoZmFtKe8mV9R1ZUvYAZaD8dw2gNsRq6m8tvt",
  "key8": "23Tm88uAVW6YPGcHqUpynV4D4N7kQ6KjEU7TsyEtNNhAPsAXp8tuV3bfuKhnhFdSheXmsbpuco6Mozr7g65Cm71Z",
  "key9": "h8zRXgj2vNwKakTyNmLewTV3137SS6u922DRxacyLpeBnP3eGVV2dHMig7ATjZh5AD1TqTtkkbtSNJoZ1e7qeCk",
  "key10": "3yGgakLcRn9ankHd1NNaiqyXKHtBmCHjjM9oLtfnp77rQvQTv7uYqXZ9NvRSkwwwjMHcvsZHJCCqLpx455hh4boe",
  "key11": "27h155dzTAdpz79krWJudoSNm42avpGt99KSRiF1gdDetNVz24C7GVVYQnZ3LavnfNiPCjrNLokUZTbW3Fa5VKvt",
  "key12": "2RHYxkjsxgzKzXJx1zGPqxuK1nFuCTMU4qVZJeDh6peMSPjkCRuYdKDKVhXELmZ1pnJjjzpMX8mqpEGzYHnT6hoL",
  "key13": "4bKRm49CNxywRMsAwFuUfXwNRUm1oJZ3GunTwF49ZrqUHjqHVJyNX2zFPCRuDFEaYzUQuuwZLx7T6MsHZRgwbGZd",
  "key14": "5J8T6DbcDxWvzrZUzh6vVzwVPLhJ6tSdsmGvEuGiKa8ngQqwDENBhCaPz9jfu1JqzCvSVFQQYBBKhGr57QZP16Vh",
  "key15": "3VJuwCDK8nkN5kNkmKBcyAXreiC7Fiz2XvhvuhAXjCDSs5rnNjVJvX5LEhZUKjBrbHBXQAxy5DpMBe2JwwuTjSHT",
  "key16": "3Qf9vxph6qzaQTtts4HTwoLHHccGBiDtu42k55RKpRaF8bLZxP3eTftp8ucp7DPjQa427yo3Qb3eXuStwc6zTWAb",
  "key17": "5L1XrAPp8y6VcLXHtuC8xvkcQJyewbjSSqLi4R7Br3oSr8MzhD1Qw2MMsKABYUXsUi2Ue4DjsGYX24FTYwBr2YsS",
  "key18": "2Lo7nTnek3TsJP96WR5XigZu8WUZffyjfuZqRjDVE2udPG9qrxfSPytdBKmd79Lwg4Yd7WXoQcSBUVJAEcbB6Fgi",
  "key19": "242ob4hdNoaStN9TkfuyhGGyXnCN6v8AuuKCFFCTDK64yMeSgavvtUnqaxQkhfntStHyBoJnFFNA98WCdb92P8e9",
  "key20": "4ws5y8nAQoqXTFWdVcsLD8VgDD1TPzfPF7UTyqJveipWnwhytMFQw6hwxZXYshJ8rVWDckU7Jk1RkrbbmZfxYFQZ",
  "key21": "5kAZqN2mqoUz7nNbGFiajeQ5xYgyFwBapFB9shiqGCQjcZAdtMa1vHN3nzz9rFmREQcrENPpPPdZCBD99nu1nwgL",
  "key22": "3E3r2WwPRChNxToRPQu8Fj53XNAueFZW5B9Hd3XH5Qw1Dp2ikKcNzA6uyPEWuqG32TZgxeYEFwBomwB6qdbhHQEH",
  "key23": "5BShVSQuFKrANNUJKfXRpDjx5YyPJ8DF2y9TzSUsP3BeTVvDz97GXDzDiH8Ma7mzYh38U3kEyPP5xjLSbq4ZLLcE",
  "key24": "3PdC2249Q9CfRgxZSou3TtzaQUT2aGRwHSbCjdUAiXKdn54bQ8HJFdgbNL3aVf4Jurd6aYTQjf8KNe2TsLJ8K6LN",
  "key25": "CqzEUzgErQgw8kHRw1mcBuXKXEWmuWYn3Z69FmrPcZkgfXQLEvAoY56Vz2x6sffT3bcBBEEDYNCzrJvtEAWJcgH",
  "key26": "5KXWTnCp47gSmGE6aSun1srkvR2XEH3PdeGm57EkUL7fXUEedaKUp4CofovySK3fJTWeSnDyxfxFo89FGLfcFZxw",
  "key27": "qp9UF3zzfPKn7TEuqPtz9djdPqLC5L3D1D8h1w3iFeY8XoaH62oLJwdDqMgTmyuTRfdAaEjs6PPLDypDKCbXVVR",
  "key28": "4DDQdikZsxXecXTsitVQh8J1uwxgYU8tyUReSxaJYTguXfwqxhBZrXUo5jN2Ys1arp6oV6ds4C1CS4bhQkSiVzgE",
  "key29": "2xi1pWk5PrtafdESPBdziyuAsMecmMpjSJmywCBtvxrAoAq1f7gXS1Q8zuuFuB7p6L5qMxRhkodohGLCLooNJSGh",
  "key30": "2J7d4EipncoXn6eUqbRCuXQ4dpcjrZt4R8txMWgs51JZjSW5m5C34uRFt4RsFShDE7mt64dQg7GeiQzddQDZKUaq",
  "key31": "3jwaaTiC4oV2YR3nsdyKgr4XBFasnAwnETSGFfAoxtDnardJGPUyNoNXDLX4tYsMzVoatbDc8mmkrBE6AmyWny1C",
  "key32": "4qwhGHGy1YVaeTWFhvW7D9jPfEgQn5SGdDAsk4nmo4b1hSXvRyRSC54fF5tGy4VPEJmvgofksGFNsGQetxiXkVfY"
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
