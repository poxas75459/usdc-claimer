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
    "cCb1TetUyn8QuaQvJCXb4yEdYfbWsvLpQSCLjD3c9MF5zoTGSTvqfGGRsM16ADPQEFNeQTG3MdDagikKRK8axG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JgdqthoStYgGRwusqp5DkV5rnUtj5Z6gMgCHkiPAGXCNSrACsjjjQos2yg5g3VwjhZkG9LnCwt5Pd66NZVigRL6",
  "key1": "2T3hddvp6FrNss4fXSveuAxMiJeYZ4JUraaBRvFupcWStCSJJ4Jrjxuz8F8pgieFHN1ipmztmVJao37Gr3M3DYFT",
  "key2": "56EUThV1VRYy1QcruxSbzKYoJyZcbvdN6ogTX7AsWhAm2SjaLuAFpUSjYf5uADiNupyeiXB62Y8p4XeRqa7oknvE",
  "key3": "4mjncnnxG9wosoNVUAeSzTmniJtnyqP6J77hLrfnuYQxepFTz6XxdSJ22iTTtmh4QCuRwTrPVM1wpdmGQ5UTYNkp",
  "key4": "4SyJbFjZYPgz8capSkpKLCGfGmBuHDdBCfoPDmDi3RL9cTonZXasUwebt69SoCRMho98uWQPaqHWLhTdfsbdTH8y",
  "key5": "3TcjLtZD5KHJMbH9xoDz68KsoUHppTxRvJkWGZ98rNkm7W4erjupi328MfAgXBf83fm6PqG5jhVwg5DXEeug7zX8",
  "key6": "UBNeoSLjrxzXDssMCUvFZrpJpDVJ62Hy7Vn7w1nTG9QFxsridZWC2Uk5aNivHGo9ESbqPqaAugMKrjhcAVoa4B6",
  "key7": "669vSiL1zh3q51iEjmcJUReCKYf27Cx1GEMSxnARUZZutNnUSfUdtw5Np6dWdbBjnSzyPnTU1Ucmexgc9P3MjMHP",
  "key8": "4CTTBTnDKswHNd7bPfHV5SKisLoL6zQKmNwijzfysR9LNUs81g5zgUYFzXNpUT28JpXHc7mw5giEJnTYdCsqvq9n",
  "key9": "4GomD4GNqH7PAxsTD2LmPSg1cTyPAMLcJwqKY3szXZJut3j1B4mijDr8CV9kVHMymUEsELukYxsUSDYBsCbSvAQZ",
  "key10": "GPbcdvWazuMsmso1iFw7xiioN7KD9bHRDGaxDiLFA87dhMLo1QD7Vi85prUdkUm7KU5tosGiEcFkgzXVrrkxw3t",
  "key11": "2vSfVBeCrYMi9HhoCXFovzqB2v9jj5JzEjyQis6HpBUSt44sKVcoQMeTEsQdacseVqMERujLkDLbWdinPouC3mvA",
  "key12": "27RP3jbw1moSeTGrECbNJoMWqTTjuB2Gs1D2reGfvGzAxBLi3teJGYaE327tz4Ba7cCKKrdfEcKeK6o1REEuXMXY",
  "key13": "33mGcdRGSfovBEqvkVgfbtGCJaHX9cEHuTeeVnEmSuRcgAcsBRU47zpkthyLojVmRCDQEwQjMVcqVJSx5t5ErM4G",
  "key14": "5cAuiyV2ByubNMZPq78o4sQRQTGFvUyNWmeHAm3sEUmvC4pe32M2NP9KNVWtyMrwfjg5RaMrYZRCHtSC3XoQeRLj",
  "key15": "2ZSHCFhfnhJaxXxVjP1cgLcaru9uJkHyqnbeWGSWPtCevHGqQ1gbyUmSsrXgfhYfQ43i3dR2yifwB1T6cQo6dkke",
  "key16": "4HMSiRUvKwpp59aDAeKEZGdqL1hVzd7tkjNQrN6eWJumjW9UXFtYS2xqvXujtaszEMFzV1S5ahhLExrSSgdf3pFh",
  "key17": "2d3x8u72swBnNsLNiXfuoBUhDMU8PBr1LFQBMNPeNwc1zmUYwa7okYoT89UWZ4imPTiCdLYrbSqvMDt34n3T5kiQ",
  "key18": "3sfRKqZmxP8QkrDiqt8BigtSK4qAtV9AaD5NtZ3K7FPmbXToFXqCBg2TRDnu4Vk8rAZMzz8B15ThNg1KKDuFiu9P",
  "key19": "4ZYiXFbcFHW9LQKAUitS8MG5BG5t4n5HfpVb5jTjPtGs9Z98DFBMf4Mt1RhrCFJA4nENQ6nTHRzfyyBNcGdXDfHh",
  "key20": "CoxbTSpLxuATM1PB4XNkyLk1isbaNYMTnLZaxb3JkCNC1AkC9Z8TDPMAdFw1HkhHPyUpj1VeUh2fcdGnz9eKEeb",
  "key21": "3YM7myoraVmTP65pKa2VWeVqntc3AAFNUHu3tYFn83YUz6KYCf6xe9nfa9P53b747fH5TpeDGPQgH4J2tZt6t4mN",
  "key22": "2L6Df1cXerJ4n3LZZZ9GnKapF4ZxEwqHP7qvoW15fU5iRNZDvehr6AsZtDuTchNWXcrV5HvUUqzeTKWm39LpZBTh",
  "key23": "cxWnpZsxg3jkasGkDEaspJAQtyqDBCVAsfR9zMKuTvP1862E32hdBqRox81MP2xyiHnKvcxNqbRBWKWRmn412FW",
  "key24": "3vZnCrK5GAqSX9Mypc8vNDaaRTYMtzcnTmHTY1zrz3G5aQ5ByGj6xA4x1PFCGrLL2FnMQJkaEMA2oCYZoZaUKhqL",
  "key25": "5JFva5PPGqYzYJANDBZkGQ4EmQR4E6ga2MRxnE1UvvoZuEwQjiRup2KEVbs1EV5NpFmPzTfTCRyu4sbnXYKZa8Vz",
  "key26": "4zXGA9Hfxuo4oQwVnfZSsyu7aXkDrZjRCAhp8dBiFGvCZZNAcUJxKYdzhwTmxFXxVRc1mBvYLo6P9opgXGMuoJ78",
  "key27": "giVQpQFgEbrsFWvVrXp21gJr15Jcz5FZ9VCS5DcJchZsX416B9QFjoPSHaPMhXgKtGDHCtPPkwMkrobpoihUgVd",
  "key28": "2fXobU1U4ExpvZSmbGHvbsYJqihkaW4sNanstHV99crrUXJvp3pZp6qjtDVAKz1TyqszrDZgY8bwFqUM45bFwqRX",
  "key29": "5824BRKDXjvqQYA6gVsgumCYQKDGYGy9rubbFoGuqDRdp36xk32fabQdE8CRHffPuZq4QQrPBrwLNHmiLyU1C5e6",
  "key30": "3rGzna32qzGDW1wU7XATQiBc87HQjeS6oRtiGqoAvhnqDH3DVor5CkFX7Ww2HJSYnvioDUAawMjEuRCvvCY12ugM",
  "key31": "3cryfR5AM9sFrDtj1xEsFN3cV9FWSc16uzTp7e1BMEPo1xhsJJAntmykyzu2VHCcGs7YGQzBzNwkfXoLePxCss44",
  "key32": "5AyTpwfgAQpzYZfXaZom4TLEJidAjkL6w8YjC2HrhB2Dh5nHbPCfbMkuJ3PZ6CGLT2YaFegSfrws8cBLoFzPa7GY",
  "key33": "4atVYYGEBCPDenBjLXCiUibsyEhriai86vhEUBV9knGeKebhDUGeWBPSUZTFL6HR7KUs2WVAGmHvnBYU5wR8tdKk",
  "key34": "2n8uxQXR16tghQTcdzdxpQhxmEeG6PvBrzhBUL353SZKvX9qviMvwUU2Q28eeJgFbNwsSyt7v5PzmU6X99hysrXp",
  "key35": "5SEgbAfBstfisMenf6ejDkYznezJ2fAVp8TCujjdmyU4z6s9owhgLSzqAxVwwSagqte4oFVnutijWWQgXRYJ1FKh",
  "key36": "LMHD3A4N13fjfqwc43qESvaRTf9GdDCGm7QJPvHam9vvGJCHduYqcn1SmL4mdkvMrJfRA5Cv98CCsXZZshR3zpQ"
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
