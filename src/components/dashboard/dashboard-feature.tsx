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
    "4xwJTkz1BAEnyt4MJh8NHrA3B1Goi67H7FwQW42vj92qQGxBanCqwKnUJeUZe92rDsvbE9BnQEiegtm7pgdduaF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gki2aLMw1kYs8bYm742Er3kucMpr2xSmwxHEMeGkwxHTVuRxKybwXd8Ao66scLuHV3oRr5G2x7dXmCG5J6cXppx",
  "key1": "r1ip4KHSzAqPjSE5N777jghndExipT67NiuTCozxMpDtKELfrmh2CGjnGMCTNdhMM1F48tEVtN1J6o1e9x76Ccs",
  "key2": "54LUU4Z6VTJKGzQj4DVdaEip4ADTaN7T4GDxouNEjKJLqX3nyZebD8vBBifEyRQYZSFSKtTqQuSciN39gymib38p",
  "key3": "5PWqVQh6TaGBhV4dXYVfPbfCG5BDMSb5zLsPqMAWzgENBX8A3cq77DMQM7XXKD7c1unDtwiwh4nxYZfXTTd5QZ8s",
  "key4": "3kG97ssf8QhjZJZ1ebCqXP6WKXk3LsRMiYVCCYyFPmnyiqYe5HiWeaqUg5PjHX73Jcd4QiT4MwaCyhJq6euSNUDr",
  "key5": "2nkV1VrJFtgbg7nMTSzwC85n6MJSxjo3dgBzyXd5ZFdBizPDGfYnCMqsBVcc4KAu4mhHnnn24kj7tRwuL3pDrHY2",
  "key6": "ZLvdc9fmCq777GkJshauSZBf5VaLKVYguZmK8UMVQ464RkJ8byEmwYW7CMmzHdYFVvSoceBCejZGaphoSiQ9QaY",
  "key7": "KEEBapAxngdHcQ23RMWZVPoVePk7vYe6Atb8jX8RVvWYihiZghe65HzTNZaCpXi5yE53f8Gwjk3mG5zEktmLccr",
  "key8": "23MJQxv2SnVYhrFK2HDFDZWJa9WaGCxwvKbZUvMmo2H9qzezczhMhJNheY46C283LAYufhpw1eTdEdoucracJuDj",
  "key9": "5DZY4fWZ5joxv7oVZrjBEocN2ubJyvN1jmnUaSpfGmkGAkoQ2BB12ojWX1KDqq1d3z7rbGbQxTcsnwkZVeygPQDu",
  "key10": "3LZCUmZFoEfAPyVzRsu6mzsuwVT7n9HABscAcpPGrmP1XQYq3jDWfFHkNwaww1oTKPZCg83qtWHw1mk4htbLPsP1",
  "key11": "5w7Q5zBt7f7dNiXMkUK1uN7AnkGd1g812EgzmTBHAu9QP6EeCzHGpj71DHd6BHp5ZyuAaxJYhVBXDHYVBfzFFdHe",
  "key12": "3gu3c5s9VBUbkmdLT2jsmjmCggjxsrxQegLVBjQsg1QTAbFr1tSRNsTv54XFfNxr8xcKgqnccU8bcu1CRsZed9HP",
  "key13": "CtcKJp1XcmrEK9eDKt2AuFq3Xh4oPhYiUZt9zaqivh64WV1Las57WsARbEaNjCw3QsBJ9mjbthn7gkL7Zag8gSL",
  "key14": "5yxcDJZTmpeZUohaimwEEjs3pgAhAtCoJL2woF1xxzhYAWSeFBXyC6Q77r3tGq1qZNjtgdchAn5H6nuHpEhUn4Tv",
  "key15": "57dM7THzi8Jvo49Q4x2aDRi4pbMHP8UtZ7uY4Vvg81dmpMeUjeRoUgUrww4k9AE2pnMbujBkimhZNRH9e8g848hs",
  "key16": "jDs8pB3vawga4Xjse9d1iY7wgvxpTD5faQy58u74Nuip1PWsMroUTu1gdwzjbEDXPNxVbF8Sf1cy7Te6VVs2KS3",
  "key17": "vBiF64dt9ARxn2GmVVoRfhErJneJBfFXT5KQ5iB8CJTVoCRX9TtH6Fhm6cRY7nNqeC1Y51nS65b42jZBead4z4w",
  "key18": "3BcKCte8fC1RdR1Gn59WxxXgwpC1qxYNNhzYBUhC3hYFbYaZP3pxv22wD226ecZj6KgsryqbtwFefSW43QdMCrJt",
  "key19": "3F9eYHZ6M8LNaCKnKNBWWo1rQJjUqDuysEqmR2DEY3RdN3fSQ5CrfiefmBFjVMFfu4MCWhJDGog1Dpx5kx8Zu2hh",
  "key20": "4Fkz8QHmbSNnaesT5R1wecpRKUCjSM6f8WnNKhjJaHnhbdXyD1KXSYb3cw6wb2yo83FzUwQKAjt9WyT2nVffvjJk",
  "key21": "2JbkHBk1fX31sp5kF3KdMpSEyEtU1xVvUuLgAnuzCAFULywVpfCKcSQuirhFSQZRQQbZogSWA7X7oucEAAXaiGcc",
  "key22": "pEE2zsdAfJn46gEsodYTJr8VU9sLhnRzQKjn3bCUy1YSMefM42mxaTMejSdtJjShYkHHrEwWXVMuNYGhhseeEEH",
  "key23": "5bm6nGnEXcL6xuzwgQXuyEmkyofxurh9NXUJqdVs9N1tqUc4uPoH6gjq27tYXGGALq76QgLTKmTxSkeCLxzArmCy",
  "key24": "2WYFaydMePQMroMCW5JJf6XpFe6nE9VzoYSUGkuio6zQwMQbwJGXntC9J2zDzdQvEHvWE6ve1YjSVTcJcVXKQoKX",
  "key25": "5m7xRzTBmKVCuZnt4MFaesASUAa3UGayAXQMubc1vTQ6jGXqjDiEZAbB6s57KB8J17LAhm9fiKxHrZexpD6AjT9s",
  "key26": "6BeCiiEt67f7NL9993x6QYvRUWG1Kwjj83hEDxRGigNKCD7ZGsCg1MB13sQYfhu2mB6onPEArY9sW3CgWBiLRuC",
  "key27": "385xpWNrJUtR6KtN1B6rHuW4zibju2BoMMtTtipT2YGCAEqCRHW4GVMsEymWxwcdHM95tTQytbyuuGvnosBR9hJC",
  "key28": "3pE54ays3cgP7A4TqRZeSknRFW9sbGWadMdxQGHHZTAAaAGBMFkVK5Gau5rti6f7DMTuHou2WPYres6TM7wxUzb5",
  "key29": "5dQdYW9XzKkeuCr9rkirmubNVrAgiKBzj7pe8GiXHkDJcooG17Ggnx3swjBxfL9KbeEzCeuPscn6wAK2yCSvs49H",
  "key30": "2gstPbZ8y3mL4cr6D9HumCWgibeVaq5W9eZr9urzMEytSJnKCMjav8ycje3MvnCLsig1b4epk5VYx3qV1r1q9k8H",
  "key31": "4Wnjo1tBXRddt4VuPBc7nKipyC4dWoL3Cn5s6s4nBDeDiyL4DxEQVXNaj3ZLqwiAQcESGL5bN9n1CaFWgExV5RxR",
  "key32": "5iF3RwLPaj2pmit259dpwYAuSCP1hcSZiaV4JE2sEfmrqiVpmB2rm2E9oruV4Xhv2BRZqxzUMX459u6AKmiM1Si9",
  "key33": "3aQy7WKobrCrFBuLaMJyZBEqGwpUpmhGjzbgA5uMDPpXTBdknjF3sFxF9Xa5gzJZ4UpqZHkvRAALateEfEFxrgus",
  "key34": "67DbtcmNn4LVhKQuT9hwBWGetAjhqfRvtLpbJqmFZCpGkwAfBtiZzUz51wxCkrxU48TdwhJSz678TZB6R4x21UA2",
  "key35": "3Z68ooBz1bupuMVDtWzHTcQTcs1mSqgZRUVQDHRLB6a54gKAG6qjC5GQKoho8hudkUMaawVHWDrqqPyXjgNkENFS",
  "key36": "3mK8YtNpAkGerhnAcgD6nb8L7N5wkdUyTC2NuEcfbe9XvEQ1hHMjXPwgK6K1V53wB3mm8eUsf1qjb76486GG2sYu",
  "key37": "4AoGagiLeQjMAb5aMDU9TvcAm2DXj91obXSnoCTVcRWaG5v9TdWWsLc7HkSSARbvZWvKRNxpSEBruZo3B2rCk3wE",
  "key38": "mVJNE2ERrZCDe59K4wLXEBQS8THHB1J7HFSazjKpG7sJ2VvS22v15o5gsbaeBNpmmBtY7T7fjYDUPaEWuPnHrjS"
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
