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
    "5Xk5QrMrmr3AFfaRCtZMXwKCmNN2u9j9TJsqFJPFCgaEH5cgkpVwiWXUc8outiMB9jn4MGPmXK6TcAc6jzWLiXKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLZVeNFkH6xVuwMNfEGPCDFKDzk8Y2VYjzd5kHyLg4ycHqPLfb85ESQ2CHA15BQmRSA3CzkcGBq4kaPXRHAj3r8",
  "key1": "55UJtudFLFno1jrt5jkEJ1S5jUGchm7buvcz5YZqFTRvtd7VwZ6v7rZ7Busva3TtgvAKLoQ6p1HuXJQ8b6gSdZ5e",
  "key2": "3fxeUX2YTFjq5phxpBeLFDXBvddTxc3LwFxA6KVg11peKuHPtGWtvdQgFkCwm6WKHPwqnm9jhxRRMa9Ba8Df71qn",
  "key3": "2CQ8JkTvY58m94zAgKkRm1Pxb4PtVwPR5iCqg7AwzG4a7DUvyJudvUi4MJpF4D3JzacYw6HyPcF4xVhtYZbVQuLv",
  "key4": "424q2bawKLBxZddJ3QVGKvyAGXT1v6J7e5fzzU12yyffZcaTNWXiR3QTBuvRNoXkZqv1dDVf6ewPcGM7rLfg9D3u",
  "key5": "4XgGYpk83eG1dVEuDbEj39RFCnSEjzdkbqKN4bQmb2ghGWg4izpGpAa3S66YoW6h9Gx88bZKVpUQLasHdnRgWGjp",
  "key6": "3iRPZWY44LwNNHe8KU99RTMeF2BPbshhQZpo5DUDqPMUbDHHPR5BdQ5H1LAw9Xh7gv8TiGo2W9iGS93V51zH9cFJ",
  "key7": "5a8ByaHa4NGkefd45ekGAk4nJn9U2DMm5Z1p9x4ShMHM3osu3fvCC5bJWt1BMZdttk3W2sdN2kFfau2j1agDo1hW",
  "key8": "3xAUNxSv7bHMAqJcnRNnHycf9j7CYbvss7pNwoR8q7u546UChuzJRPaVa4fb3gUzcaewVfVfaEmt3LvmTXPRGQn1",
  "key9": "2efYZYSvJsyPavJ15jNUDm12m3sBkPhgS4rE97AQkppUo7Z7QGSdMRSN77micTZsfkQuAqgZkjZVsTcumESpDHzQ",
  "key10": "5pLQBudPbGXXdYJKZFyXdWfDgvTSLmEBnmLo5XM1cbK9b5ifrKZPCY17PzEavF6G9mP9bLHdzrpeiSEEXSXT1FCn",
  "key11": "3sPzuCFgKh7D9ZW8VdPCvQvvQbAMPiRKZ8YPcS38Jb2y3WQfvGX7pWxP6bPsv18FgNp7PGZ6ipbQKm7hZFtRVMK1",
  "key12": "4kt4MiU4skcT6WcKiJF791Cwo6wHTXTLrBibtKjvBFHP2UBWSt3arPZXFLLDuiZaPiRp7SGhjQWkJ9kP7LXZV2Vq",
  "key13": "vYPUyofiCXakTEKowiByKhABEZGqdHwqPphVgRCXEer6QNne9TTDxBzWSNvDVf6se7exDNwHbLuQSKLgFNsDhij",
  "key14": "57DgaWZ8vQr1sKkUKoaXbHJc9CEPyDL3EryTE8g2w9nAYNYdG3U4mnrT2qQdqzsNNpyMs6NxX9C4gMSHraqr7zq9",
  "key15": "3KiGkn29PYwSnW57PNEJMGjPyCCGo9HzxrkGRvVPM75ExtnrxWHV65F7ftaKi9m28CjuKuuHc6vnWcSxNgBz5saU",
  "key16": "3VwFnZhEQcqSW9QLTMULDgsyyCotWsrEhPqH6oG2txKipzHKWxuu7eh7q6B7eLYA6fToea63yfHhBH2Vuq3Bpvoc",
  "key17": "3gG4gZxPzd8KEcMSM8RQuyhcvnXnAt2jczDa3FpiR7kxRcRQJ9WSFg1cDyaCrwmiXvysXuPXiWafsuqw8Ti7b9GF",
  "key18": "5YxTzxa4vykw5xhdou2AVnyNThmzjxTsZnupjCPPGXiBTddjEbg1nhcMxY9ngn4VgoUufFo4hjXcqFfNKAqQgbyE",
  "key19": "5cMStf9StW533gSXnLZ8RvCBg7hRmdYD7jUbnfZQ4a7w8SCdi7tqjgZC8S1XapgjJwnjdAn4Qpn1pg2eCwf6XLED",
  "key20": "eY32u2vK3kEwdG5P4unBSW49qwv65xxZ4mVLkRT8L563ANnU3u2iibVDZGtyidZYHEwg4pfptJ2vmPq4jbgRBGc",
  "key21": "5pcfS7Nw2mXioqJH5bJLsnYM13J9QXzvxdYTqfjERW5vwa75UbQ2u4BDF2ZRtztvTF9r5aCiPjREesijgZbXAHpb",
  "key22": "4uBeMhbd9Zpq9iMyAQXEEeCLRYmFw3uu9Ha4YCif22ZFyVHEDPEm9hMRwcgj6vd5j4YePqTDkmpeKAU1JN2zXqzU",
  "key23": "531cjo8mCRwf8siLu2Pb3EPwT2rAz8TwHiNxB2K53LnNBSiFRHyx1D4qHHYQ51K6XGzUMYHUGFvCyj3tnQrTvwhS",
  "key24": "2LYXJcL5VQvBSHEnGEEpYknpueeVzydGsk9GT8T38acEkTNT6BNtMwW5QV7gxVM3SNKcEGCA4PyMAqJZz9mmRZu9",
  "key25": "5NRidBY87MzGGTLXGdVijywx1XUXziUWVhk8D8UoYczzwSHEgHxLaJgpiaowoEoBKdSirGzYofqyfBHiqjM2fipr",
  "key26": "3x6mR8N1sVxVEGDd8NJyjKqvm15EQZntzC2JPmULBGxGbe9wBiGUP5Y5FpdrzDPMjamYMigVPkSXFbw5AiCq2QMi",
  "key27": "YNSQUdJAeXUEvZMdM3M76aNwyNMfy2KvPGi6apQCDy3nHpr3GEFijdSCrPEedJVmR5GaDWjxSwHzQvjFtsmPPbd",
  "key28": "3tGJZuQpEvW2SkWwSMegqnv3GPELvDaTsF2sz1kKq2s7uBqqhuMUd5SRNjqjMLMFDP56PjgqfL5czGHU7Dtg4zH3",
  "key29": "ywvbD4LJK92cjBjFjzk8ohPix27M8WWUYLjDA4X9gj7TLb3GKfxatsiYU7fr4ckzLzvL5TNw5ngTNwy6RiWojNy",
  "key30": "nWMS8TMdGyLkY9yRWoHGYRuekEr2gEYjkjP2KqrqjycW7ytGdSerBTSFkY3jqQkMYrkSdegk2rk8McEURffb4F2",
  "key31": "2KcgjW8EFGgjht5LVhRBSf58489kcEdza5wkREJmKbWF2HAMTgUHeimtYowQN4Hv5Txz6yBugL5R3WtfPBq6GxAi",
  "key32": "2CmBJimKbryzWCfZ7VJHYmgQ1aKvNucCwyrgAae5sKRg7YrthBdVzvRva4bWjkzEF2myiid1W56RdfBd7XnyFcy6",
  "key33": "5TbTS3rD9jpQ7R1HtyD1f4zDnaMpq3dTHftAvC6hzZUxjiybSHdf53BnXthdkzb1hipvciswoA95cXBQtq9ucfik",
  "key34": "3LPeruSDgSx1s5Dj5oz6JBEJCtCwFiBMRFxWMhWZc3jaxGopJZHPqY5pMijdxtobeFSHwkPXD3sGqAkLqmxsZsJq",
  "key35": "45e7UCrcCmR4hwmHY5Bon5dhQhwaS7KStch9UxFiiAxEXEYBKuHHcf3jcQFw9coT2qaD9v98sm1eiPKAf1g1aEEF",
  "key36": "2jMaz1i5t6RE2VFh3tdC7eLfcXhKFx2NejK7XercEdKBBREiJgTvFS7WUYo8gKFB16x63g2JV7U9pp2hYX5CGJcn",
  "key37": "4Asi5t9xje5TGtvhY8jUyKMruqazrkJBBNUX4qVMyhYFsnuouj6MMhHS24nGmpCaXnfK11L1qZBdQ5UouyV5jgmm",
  "key38": "3KgoskmPo21c9Dxu9eaf9BWPuU66tzVHStbGhMae6f6N3keXiabL2F1pdgkUiuJSfT5N2ApJh3JoE2a4fGkwuYyV",
  "key39": "4ruhuk8hrPRP1Ka3FPRyhrhsDhP9raSN1Pr6BcmQx6JPx6GnV2WW3Aw2ZJwXYsiCHsFipLfEUh5FLZgwNzqKFWqR",
  "key40": "3pV1jDYz1UwL1SbpcvjiniVLciEaYSmscXLTV2dXjKnLYWzuLSA3RRo3F3aCF3miV72QAumo9zn9uj1UVLamLXtm",
  "key41": "3T9dfSB2EfhetmZCBHApUdyfss5Cx41AnEJzzie8oJd7it2AySyTNnXJixpKynaiZcCryqTXURy1rtj8D2hWbT6a",
  "key42": "5kmq1UgEukTifrXfY1j2FMGKCQyWFNCxvKgPkCzbZpxhwyMenkGLTbprV1qvC2rkPRbZKeXG9EMiECcSE5QhYETm"
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
