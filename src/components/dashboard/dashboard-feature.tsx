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
    "56pUcEjW8Nv6f4cvEphTcY4ngBhMu6b1co6xEtoL3X9gECuZNK95NEvmnk5gmjar7QtceWs7yfFyerwADmEeHDkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQkLE9LMsAEzXhuuRBvusnpHuRuMeNgtHzniNa7tdrtw9EBy3QkuMqQ5gS2tatSBDgzxo4Botz71Wm1wKk2iT98",
  "key1": "4FVbmVBV7aw8anmtzb5MayZHHcvmfvtPEnedsYp7NUnie49ANa2ckEouCXoKccQ3CVoGQLdFFtbNzUqNF6ovqycJ",
  "key2": "pjVjBxAHpNj32WA4bstmbSHx8Y8nGzmfqsfKFXoo694aAQBe2hQhVhnMKV6PkV1VhNaVEDqfX5yQ2UZ3sVeeBze",
  "key3": "UTzPWMzQH1RdpEB7HNgBLgqTKEcqcMVMzg4tUzariddUwpfTLPcgueNZ9LRWSHWpb67NtQKTR3BaTW86G1cU87A",
  "key4": "3cJ2BwuE9eSi4pAuPwLpFrmcqNKpFCxWRtSMjUpA1nUi6hPkDBMQf2XGM71DLhdsc7WmdGfaub4RogU8sQWSvoLa",
  "key5": "2tvD7b2zn1aj6pVvfJikSY47UkYETMdnnVh4qGwCtHmtGuxeLxLx8ycQFkWRRt6wSZ1dotxwt49MSv9RaoHiuMEt",
  "key6": "3a5jti9zDBVDKncXpkckLNtHHdmnsz38jsLFgmV8X3Eeyjk311AuS74TAxMuWvysSD41MxbiQDxVZsCcHWQaaxxm",
  "key7": "2rEeGvgrE88kjok6iF52bnSS6wNZP6XKBvi1ykpsQhqzZtx8Bqj4aBzsjQ2dERbHTBYwT9eqEpKpjyLNYPNyFgPc",
  "key8": "d18TSggGdVGa5APXyM3N4mKYwZeRcT5WgnXUXvmiMHSMKvjXu79iUNzsLBviTwD6g6Qxr1Wz37hoc9BfEMXLED6",
  "key9": "4ePFS81gDvqKTAxU7pKvAvB2GFv4Cpddyj9j7EAx6Y9kyPUBU1ucWaY7Rao4fpyvABusaxqDHfs11cSFdkaUBfn4",
  "key10": "3fNc2H1H4eo3oT55GRhvHBGbgDhuFNtU3QVHJU81i96xpXMUks2DEwCpEPiQHq5fkuKyCDbXw6gFw8qKW75etE2R",
  "key11": "3CPYoVk7WR4pdDppRWoujdxvUaRZMTS4xGP75uZAHGNtvrrrEeGLgLXk8u7aUUrPbukemxuLu4EY9yiNXxq29Pmv",
  "key12": "7153dkv7465dNvHPmuTythLLTsHJcJUaAmPt5z5ggWxSLKPtRgtyYi5MxRzMLYqAZQVBuvJcVmkAMt9TVQEyGiT",
  "key13": "Rd7AbXrmXCTXsChce5wrPo8VnLS8J1ZDnRfnoMNxF6Drt4Bwqthheb3wmgAC4QSwd5Y6cgCFFJMaE9bbe4Gg7X7",
  "key14": "2u8Hpt6Gp3Z4eeN8Usv5TKBS9dJLaHLBuczyzas1TmW8VHRfM8ts6pjUNYfhEFjmpeSAZANzYw9uPxnXBtJb7UGR",
  "key15": "3ysExbxQdKW59jzefwfpyJGah8xJ4VKUxuNnPJxbaHSuWSr9JyMaPRv7E5Dj9PZh5WtFGkU6YwJBrjM1b9ukfbmK",
  "key16": "39pHBjGBWgevbMcL1khaYptn9zHNTmNzLS8gkcptanW9vWop7R7D7jm51ExJi93DJqo8Q6V4V8wEnL3e9wwsZjP7",
  "key17": "5vetJ5SE4y9GQpLt4tgXEuFMJCisX618bULc2EPbpYYqFgK5pThagNjFUje89XtyPW7acGoh3uwdo2Mw8gV6Ba77",
  "key18": "F6LyVvKPVThBJ3TL6creW421T8shqpKuduJVGvZWsZa6ztb97eBodk21kCrqzn232nXyDh1wVk2dzzbbPGWtqWV",
  "key19": "5HWE6cT91gh3FhyieNGwUBvn3bTmTUKhSfEKHTiVDFJirn3RkVE7f99SaCaZ6yJx6YimcAEdB957SznUJEJSJseJ",
  "key20": "3d8BpbdKEUn2G5wkFUpZkL7DfHJCxJBXE1JFp8noyHAXJsXS1yW51LsRUx15L2m6Xx9PZ5crJm83WQBu4Uh9DMBP",
  "key21": "4eZioyCCWZ4biyqqzoqmuAXV5qgL5DUqnznuJfGMsXddRbJug7N7c386ZWJGocecLLPV3ySRxU6VRBhKgrKWaQbJ",
  "key22": "483NMqswVndaLCgivxo9AJeXCTkz4Cgxe9zZiV5SJd1bKTNFtWeJoMW5omgZ38iAMM8Q7CYf1afuujoLJhMxw3e2",
  "key23": "5EGMRD9yaVngnZBw5XdrKah9pv2wqu75jekzFhs8RSvxGdBtFFTjFfv5UzeZjKYSiieTBpGniPYjUzQHK8KgnPTH",
  "key24": "5vyLW8ya8SMXx5rzGZDXrTrrBYyg3ADD1dgVfKM6J1ioF6LYpnJe2fcBpiyqMdSwjeJKVRkb6PHBFm4W5tjhw3L4",
  "key25": "5uZbPXPrnuVdhqEp9RnUDhr98Ntvcfim9M5PEDnW9RnN4tTkFD4cEJxKdntskmM7XbXscDpEt9MULv8oLWpdupxZ",
  "key26": "5uYPzAq4yFQC6fPX6DkxJSb1LbUG2qhkaTpfARgx2kRmyfmcZSN3byXziwTu4srJLQctwhNVgnMLLRn5RNa9ijHC",
  "key27": "sQ3XimCUic5dwPb9AcuAxMtp81u78aZJaqozSWrmTPxTXCiwMRhQ1ru9Lmyo7bHfDjwPB7qiX4fxyJujaH2sZ9z",
  "key28": "5GsxmgoEuXx1QSno6ho3ZzHjNt3CWxnrdQozUVUyG4JAtuhbD9EtxVVNv5h8hLbGN9Xxo8zh3uADFEgV7kzYCszP",
  "key29": "5gsbG4gL24vCNBnw8eXAsWN5xXJEnm4WZ1RNpv5NPYUzSsXMiW8FoDfrat8DMmCWibDyFsZTdJewXxHHHB13WgrX",
  "key30": "5KD3MpvkB6QQFSduUEq28VGrVfFp6sR2fcE9PCH26h1EZTLguZ1hpMhKgJt9uxdVwnm1WaHvKf16hxkteKUHBzUc",
  "key31": "2kz5Yuf5NCUyLgypz7mN26FWUceWuWTipakWbQoRXz8X8kLREQ6Hg4xN3PmzGgiCNQXLbt3rC1JRkE27A78NaDSq",
  "key32": "5CnLeCTEkR7XWQxcRBtaqjjGXcBrpJQnor4NozTjaqwcpjAX4SuXEeF6Tyh2387rLufsvwdNTj17sTg9DHEL4CEo",
  "key33": "23FLSaVPPw4TFxJasw82JbUbQZkYWJ3xMjLPwUfvUJ2CMFt9sm4AZhtbveX3Q5JzgoRz7FdbMb61x9G6mLCfR3zy",
  "key34": "55Twsbd4nFevcdvWxxvfvz86k6s67X2htfHLRjdLnxTPTPo2nyoj4qLz9HxNyvnb8W8cRoPSRrL2VQ3PSeWUufHA",
  "key35": "2F74u4UiyftykSCbty6sChg3VLL3JKiKrRmSZkKXvfX6WihBd8D2dQXx8dLSYdbmcHKc5PjqmEABvM6DLCEQuVDt",
  "key36": "4WE6TuLJ8mtXcgtKvRQqf89PXSpyJ3phC5Qn3xhaNy5X8NE9M2DQRC556tkL8EFVRQzMPomfXruqEptyayL1Q89K",
  "key37": "32EjAvAq5GRcHzZcpLPVCXyUA6TzzAzznab9iFfBqYG8uMktjhiHrzq9W13BuZpAaY1ZZvr3gxVphbbihAWDqUJB",
  "key38": "DaPiXvYc5UArypN18NSC7GaG7ZfvgdcUcb4WDxQTE74HnHXZP9ECHDG9aEXNzdm5x9YJAFwDMfinvTaJuggLCq8"
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
