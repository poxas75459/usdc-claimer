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
    "tCYFVaZenHjhjbYBbh7frwGPkvkUPGh5uGz7xSRQPBaufyCVqPSXcihVQSFjescjNBfH8a7jxkMq4Tv71vTw84E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoWb15bPxdmGLQQzGN9QcYTt1UAV8TXBXPiw368KW4vCU9h42gEYiF1PbtSiCtbyFUBsWiWF3SDSovvs18bJ29Y",
  "key1": "37vadrRzeUZGy7pLBe2UThyBxiaAPiGtNDHck5sjSUptkb3pRCJNtNgpknJG6UkgJevn7GuG5q3wMsK2Cu39bt3b",
  "key2": "5SWLh6iEE8yUNPwtaskaG4gcDNhFeXC6V8oSwAgBUaNLuWZJLaH9xuV2BwShaQKoTes8sCpJFUQxB9fqF8JAnxnM",
  "key3": "Ukb2jYbDnthHTAGSvjwKRxchATutHVucxA3xzHV5yk5Rci1uidWTK8DPDkH68EH7oPWTdFtjhUfzG9zzGNXEr9C",
  "key4": "4dAewgYGTUynk9JRpEFnE4yEuhrkdJaNV3Z7PafRfBnnhL4vcxBFHSwYms46NN7oRMsUeYnv3MyHdj4JtmeMzBkT",
  "key5": "3Ei5igiWgbMocsy44aqzEtyHsBtUsZF18FcvQhH1VKY43gmzrFffFq65WVY2WrxXSPiX35C9csp6ETWrND6GPrHS",
  "key6": "cNF3vcMWW8LsxXRHXgS2KMrYzF62LhRxrJ3ezmzMjanESfgprmmp1vhxn9z4yyh17PBXMMLvN1ZT4C9mYkV5J3V",
  "key7": "3zRE36hyNQshmag8tfJbzZA11ou9NWSzbWFoX9j2qLU4Ru7pgqQrg5DesUauwyVX8JmurZLww4sDCtnKhGXqr6AY",
  "key8": "2AtH7GrrZWDPBCLbxkBZPuHFQwuDtPa6uAbHhfCxMHKLvYVSJBDHunrfyNFbC6pcLBSRBPQznM12AYdeeLbWRxKz",
  "key9": "2PMA5LQrGR8urXXYsn2Zr36tkbYDbAEemSiqAZi6E78SEUQc6UNfvi1tEHJWybaVDPA3Mq4FQTxQHX6fmnEgEr1y",
  "key10": "5rnc4u4Gh2ezgMQAxESF3fnx86xNSWZEut4hgtzPVRVNtjJS3CpLDDgt4xXoFMojvqxZUmc3gTjCaY8YGGK4KGTm",
  "key11": "2bmWFv9xeML8WvPmrmE9rnEoughjpXXJ6fGZ1MYNfaGTYbYS2DV1VJgJHKt9fJ5TAL4fzRMCJ6doG6kfvFVstaCD",
  "key12": "5dUVNGVctQcVNy2xefuqmyrc57FDz3eiSurWMYkpPsDnfWXd7jKxaGyiT2ZCWrfd7939VMYGV8hmJbUFpmsjiRCV",
  "key13": "3gw4r18YvPYicEtBUpX8rbk2xXu4UN9vP2KXMrd5BabwbgcaGRvyau82c5Rh5m4Skn69kyaVtc63pz2kfaLe6cUF",
  "key14": "5eTkWkgnqnrom2pNdp29PKCkdT2arGrn5YcPws4y78HtrETuFjFtZ7HJgXhnbqyxvKdZfowa7sNJnvM5m1GS2D2U",
  "key15": "2vaWga4vMVaZq2CjMsc8PDXUX5x7bm2WxFXXDmEXBhTXM1uJtVmwWdHXTRRwHeEWgypEfP6nCBSU34JwZEJDoHv",
  "key16": "39jzu2B81EJJTGNbTy1Q5WEwdbScYt4zqGkTYMRZ1KjV9zGet2wK7UzBHAERQaUzMhDQERYh1BDtNEQ6jkXf2qtZ",
  "key17": "4iqAUKXsdBzi5tETRUK5Rdex6t3rG2FFmr8d5BgSCxyfM6FU11dRrU9f2KcHzgKTfic29eJjdpwEv1CeHPt1C9H",
  "key18": "e6eWGuqvxrzZNzWiT7kb32ZDGi7SvU7Ba81fJm23WtJpCA1UaK6gd4DWgbG6uFXFgx4NgbKfrCY9dtH7NoGUmHL",
  "key19": "27bsK1AuS3pyPgwLYcTNkfjDHS5C1fvVJF7TY69R1VqCh68igh3U15VyJVNVkpQK4yiE6j57hksTBKgP8Xo8ZNne",
  "key20": "3QKaShLe991ktm1DMjKdHzqRCP6NZUrv3eFWbmCCvA4yrvErMxpNfmvaFEoStDYa5QeSoTpNXDLGYTPAEaAJUvVg",
  "key21": "2yvmrwK2Gh4mF3eWg2uSzmn9qQz1yREo5qvVxHYn4wyS9nthY8sD4mCdbm9rsg3Zksi3w6Q4D5cuGgFJsr7HegSA",
  "key22": "2H4j4xH3tpDt7DESzMmrhctmvqC7SBVBKU1f1vdvUX5dgCLd6HYxo63sncXVmpXNXYf96mtNi7kGxZsxVRwMRGuo",
  "key23": "3JUfzQ1jPqkKWdPwD5sRvKtKCS1fouuJB9oLx7mEzdqGbqjTGnmNH9kTsYRhnLNhDdbdMtZ6THQXg9DdQSKxcBWV",
  "key24": "3UY29wf2r8CwBaAi9HJZtqVU9yWdrX9mPvHAXqQZqU2qaAA77Az1DRNoURogZYy7pWaYcwJxGU7wUpxMULQDGZWc",
  "key25": "3YojxJxBb18rVJmsqwo5QanVnvAWhnCH2WQBPdeqpc6pwpB34dGto7uHTs7GSFQpDH7anKndkw5mAbvikc4VhVnJ"
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
