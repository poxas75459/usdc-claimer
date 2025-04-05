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
    "4CbbiFHDffm77HAkp7a33vpk4GjQcP6MfoSd4VHSpNCtZCKytU7FT2kYpehUJVLu9XTv8hE3rkabgbc3Cb6G6PX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQPFar5qLorMyEtBmG7L8Dx4i1VcfyNqzzZv29NBPzfnrRhMWij6rgo4wt8kpiHX1D7oNfwJiKf68TNfr4t9mag",
  "key1": "BY2uQiCidADY3Lhid2j9Fr21s7DQERufNQvEvZorgkdjZ1ANWCui7YQ47o1e2WmzNgQ6gfinCFz7AFxNR2MEqQu",
  "key2": "62yZ8NuZLdFMfbyRAUbDRm1ZBqqtUwuxm1wNrhiw14cvbjhx8BFw94Vy1Hn9NFeLBfz66XWk64NX9kLXykUtE9cs",
  "key3": "5fVoLYbA8NkBxWypkcq6RZ8wfS8c1G2EcSZJhSpJNAhLdb5c8TmV6Bi2V2Fz1HFxL7n5SXgkTMPG4denS6jbEELG",
  "key4": "4aRy9L55svjdD6b4NxMioKgozKWMMKRBpM2B7yt8fcLA5tUcD3gEFaikMi4BtEEQTCfB3g9dfF9a8EdsDuL7TySC",
  "key5": "4zmhM3pwYH9FDDUhkRfbBsSaehLYrBevBCZB22bQHnY5xqSMkE2zL1VoCjPWToH7xCFAHbbVNxq4yweckLBEb6kp",
  "key6": "4Tpbys1THZDXnc8Npnq9vwPpZ3cpMuGTbQoZ8tmNzyBcpCvPgvLNxrHJx1oPv8ftmr8eTvNkdbAgGM8f8befj3YZ",
  "key7": "2Ua1RBp5retAoxxFtZ4ZjChxWPubPNz7tS7y35ASiN6Aib8BEB4qUWrfyk2fZZQqaoEHF6Chg1ouRd4SpFrjB5iC",
  "key8": "67iinvDLJgBQ2yZzfnNvhhBE7SVCdRvjbFctmjMTRE3FePqehxCbRnR64PJNATeqjiXUibQ1TZjYzMR46EPmoWUg",
  "key9": "26Xe39YDsm4hJjncBar8RTgt59rv3NmesGhpovZJBCFBzFgR95jG4qD8q1BXdVydLSWtz6FPwcRucWGeE9UPaQwC",
  "key10": "4zFPsvvAQginWNaxS49Rie55GrmkoRxqKbMzpRFPTJaSXqjSQE6k7sCNtzJpwhUFn74f3sK9eRPXQMbKH5nAeaML",
  "key11": "5LhPkYDLQDFvHSQM3Fabw7UTsmzpmRcZaSykgVkJaDs1kuagtTm4G83UeAzEbJp7jyRPDQWvfZTxaB5gYSRan2CH",
  "key12": "5TCNZN8jQ54b3trB1aT4y3ZLxAfV6zxQ7Sx7PkLUFzFV44NwdLN5yfCi8hAukaNhbuRKeXqaD1LRG9o6ucXsD9rH",
  "key13": "3zqxuywmV7TGJA62JgRoEFedfQQWZugnujUWr2ynGSAqy2k9qtmp6VmhDb76ZwomJTjU6Swe3APmHDygDfCgLEmw",
  "key14": "N9EE9t64YfjXnERXQc4CxE1fXAQARgiAKZLy4YkZyoQdNUqPoadTABkVxhSQUoUVihN6HtCiE4GcedMDZd1nAUS",
  "key15": "3YGjwJFe8XMmdDBxBodTNPKCqtrRmvYidsxokdFaJFnNdwdL6iEfo8BXfuhX9f4AM86souB224jM9DveHeaxL3jS",
  "key16": "5j6SyjLxchnadA4iTM6YXt3xnPR8GJrHXy6ku7QLUDXFtvKzc1kxXhoX9jKjGyCNp2ePZR6AU25QUm5NLcdbi3hb",
  "key17": "4qhgTMtb557nkfC1116tk9J7SuDxRGe631jmemrMNuwt3yy7ZYgTmXWBpw3AfsHZtEwxdWw2ZJkGUsfeLaG1Y5sL",
  "key18": "2JxK7f9oTR7FhFFuZdakRzxDTAxqnDj8DPYvrTvKz5Y5iY8jMYJEgdnMgnV5RvJKy86NTRp6CfkEX8T5j4zK7S4J",
  "key19": "3DyeeRWh1J2cxPRMC9WWamVL3YF6oTLczx45MrX3Z5HUevfcTAMsj4WinKCGS5H22ajZKCbpMsnVoyMpsZeJcjhn",
  "key20": "2j392oM6hFxvmge47TrDeUUCJqYJ9wy8G2Ten5Q5wtHQ7McY7Ws7fksRdyrag9qxEcHeA6qYY4UwFDerWhyZKrDw",
  "key21": "3JuGfVhYFasikG4qm2cgcUATchJ8n5QrcmBqNK1Ys9yLS3RffCNp4yT6K74foSNDDRUNCSZYDV3KZptEW85tE5vk",
  "key22": "ddbcwERFpgH6xWawmxnG798VbJwb6xwNdybZtPtoXy7fK6Dw256fGbGyKaxuC8yws9DK1xeRkEJJXfR94oamLH7",
  "key23": "59LhWVudUwbRw2s5c2wLXKS1JSBsBMZ9TDx4aDaSJHWLHT11yMpXxFA22tM4C11yms8btfx2tta8zcDbdEPy7xhT",
  "key24": "35rxwdV2VmLxamoQk8ZKTYxZa6ti17zY6fSNVgAkyZroKpTeqzwjAzMKMJHzGmk359UNYdx9ofsaY4Vr6QuJ5c7i",
  "key25": "2PMytgb4MYXV8jGREPXS9kPZyY1JB3rQX3iUF38KBR7yNaUBgWDsMG9TRxi4FrAaqW79SveFB6ecxEqrsKrUxHQA",
  "key26": "5d9h7YV2Hci5Y7BuQsPSimRKnPxvhsSmedBVtnLTBfDoqyougETeMorUetU9rNAjBguLmPJoGKPQfnsvyxLqdzDm",
  "key27": "3ER2fq6qA11fCg1wJy6XVioK8oa3sJhQkXZrdvo5wapoC2hygqrLjNs85hQ1QgAVNHMBFgHDmQWggX2FfrT7VuNA",
  "key28": "2s3wgDih6bhVXGe7uJ1FXtv6iJ8zVRzduJyWuoMUEBYceCihoMwNJ429v19ZJBGiVbwGk3zrYRadEeZFGRcoaFJz",
  "key29": "2SkTZTmmyUGuMNgdAi7mRpPjf3mZT4aGsti8eTtUhMECPRMN9ktA2ooeYG2KNjyPavxXWhjy848buxNmfZ4ankQQ",
  "key30": "x3RraZnH8QgiUZYFf967ysS1hgBwdLtEB62rZoZF8qfu3XJgNU9CngTbcMAsVVkFnwBtW81XH5btpriYNhnyECA",
  "key31": "5Be1RwWe8rvBgbWuTk3cowMKvEhF7ju46nWvkP6tKpoqY5Zooa3v8m36j1hfFTtkuMDsUZgGjQM2tLtzeNmnrRgX",
  "key32": "NUq2v5tdz8PWLGvyHfgFKdHkJvwDqkBUygRV66tnWJ86wjg3CYLysqxrur4FacW2sm2kRsTesXKwaqAbM9jv52o",
  "key33": "56mLYhPVkK9kjgKpGxWxA6MPYeojTaYEw2CrFPGDKrxPsqyQpPr12DeHT8s2ehcw7AJaSEWsitYE7ZFPvtGa9gHp"
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
