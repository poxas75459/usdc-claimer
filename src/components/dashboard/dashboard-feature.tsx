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
    "FCxodUkBZJwm2AEmQpsZ2r8DawmQ4Qx97C5YgFbTVfyqCWAZNpHwVSuTUSD9EAZphde78JCL13pUACR6EMBKg9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAPP8oWqaVGGar8kmAf1oDqEi8GgUVLo9sJMYhVrYocS6D88RNKnYXge1BygXNqxSDQHaAaCujqsKY3u27z8Ugo",
  "key1": "4VNBVpB419dxHCqmkqF57YC2fjFvpBT5EoR12xMK9Z7tcBpDmnMNEcrmo5SSLyqRPwDQ5ZX9e1gHxjfvHcd1tWEk",
  "key2": "kdVdfSJxxJ4D8bt9u7BsB6LEyW9H4No9NUg1GMzdZzGts9jBuXrDLTynteqaKSZDvtNJX3SrXJMGq9BxjPCrPzr",
  "key3": "2HqUKAp4ZstpLnfCuKfKXXiHmyFdmym4SxrRctu6WwntVFCD996effZwktpuEdff2J5yegCcgGjRpApQUE1WmzC3",
  "key4": "4LKsJrnxqVhxh1HLyuUiZA7jaFyy4SHAxzCNcs2cMZLitLfNKFu5uVDRYuehzz6UNEzfg1CCKY1aaffY5JAENEYy",
  "key5": "2kGA4J4fxRJCU5kxcvnNBAgPAf7LdEtMxysWB5mFccDSr6LZwpB5Kf7cuvX75CP852iyuDyckn7fvxXFpxudMaqd",
  "key6": "2xzcRuCUSECbwyuZFxDevR5tVszxjsWXLjxVf9voNNuZMVHsZTD6JuoVJcd3GuQHwob7aXNGXhpgAWnvumiRppni",
  "key7": "4VaNCmgykrtwguPg5t7R2jm3HuXoA3VcoQ8HWwGPABci1D73rSBDg9QbosYwMn4Y87doAxcDNA5E9V5g32WbFDnJ",
  "key8": "2TFKUf66VMxtupi4Yr35Q35FuQW4QMF5uEh23GdDGoVpS7WFZ1qzduB4emYL7Zf298Yzee9eZbGMw9FvwUcXsuj7",
  "key9": "27iVayWUFdHcfxsM7jrPnH1oCoBpYvT6nzN3YDMSHoa1ZpH99qTMuUrZs9S8qWncpJhD6AdLydNSbea5Q3xLB7Nj",
  "key10": "4QpPzZKzuVDhbGe4xcX32yf3FSDxvCovawtTfDYqMkC3zAPQK5HPx2ZnkL7uHeWd1TVYd1AzBTV3acNCgn5rk1j8",
  "key11": "wGCed6fjLh3VPWkPxMT7vS1QU3KmwtHd9bfg1ZG13WRit6thrFY11d5HzYhfL4Zp7nzAbn7CtiKvpwFVFi5TRrU",
  "key12": "3TUaan3CRq164Rr1w2Q72G3K3Yc2kzEEbhEpi8qZio3eF9TpeFD2aTHeFshR6JBL8egzc9H1EoQ7DMYKdaY4VeT8",
  "key13": "3BS4jqR37zDC9PqEAbMi5C4DU4B2teNgyUDShbv4Xdew47LAangM2q3YfwdVg2UTrskBC8wMrEodc1XuNyEfvToe",
  "key14": "37fxCCq8dzEzgA3Rtxjzp6d22P4rXFXHWe8jz5kWPo7VjAWcd8rfK66JL2wPEuf1krUwfrxLGAdsZBUPFjMkzUNh",
  "key15": "2tkdVm4ozFPRVmdgJh1iwaH3bDcMMRc4q92kdB7CyrBKZygv47onsM7dKX9JNjExVGSuZvVP6N6L2g6e7KPauQNb",
  "key16": "wD6qfLJteC97spsTFE5pMUhKaqYoW6iwE3Eh2LvTnAj6q7y3pDddBq5cuHcTRYT6v811Qsa7frptpUbwaXaewig",
  "key17": "2UMLHMU1gZazPXkprsfyiwgCnVrsMQVWAXbZ9BkABC4BKzGFh3eQHLkP1FtxL95WFEaYZKZ6MvKaaKd4rkUXGm1V",
  "key18": "2MFEwgzkQJsKVDLAMuqFhef8thdXgZLppzF7WTqUYEhEEXzceJCxp3SvaeMBXbGSDYgT8cJKR9BcjdgWAdbjoFBh",
  "key19": "3tLsyyDZKFGDuSkRM6Gw7ELiRRdqEaK6cddp3bgVesSEjPhj4vho3Tdhaxhz4rn8vtshwxmxQoVv9WXsMvm69UUT",
  "key20": "QLbmiX8zcu2CFoL1vNb48TJB6VDWskFaN2J3yd4kJYp1STE1oiY2w833CyNXxyDXCmdV74MXXEzfoMvTkCLG5Tk",
  "key21": "3LJsU2U69BwimLei2g2ACDRgGd11gfcjCdpaQtZKuRXJsUbrrQ212AgVRxFmvbhitdTeH7q4nPCLU81eJ27gUJiq",
  "key22": "gF6BgEnXBYd2LjVSp6hsUNyisD7x5tHppeMsMuCYdZKgnrMGsxidPBwWTjaWKjCSdC234pmzfYGYpvizJMDYgjv",
  "key23": "2iGUQGQJZTvKikiLHZUt38Pg2iez3HYuGRerQzQYtFsqNr2icsdGGZFy4eK6swqvc2XKVcxFuN6FV8niCBmxqVAE",
  "key24": "2LsjiGVWxPwbwUfkVqNvwWpQ2DhnMEtXWnFxgVax8XofezcKPo28SaSnQVDujR3CQ9MZjJavmvZstfrWhHSWKWW7",
  "key25": "3McYnkbPkYrwzKUn4ECcUgJke7YuLbvDFtggnVHgEHR95UyACryu1cVHJBcjoauw9jGAf2uvV7itQ6p7sHoHyfwM",
  "key26": "N7Fe4MmMCuKNCX8HqDmjwgsVghFYwt8H7Mq21ef4JbQ6cZRPbTReCCdWxAZJ3LmBfM5Wj9tuCDcNhFtHrqZUzYP",
  "key27": "4ZDXafL9C4ZyT9HnvJaynkUqHwGMGHPqcoBabbwM9FvwWtCXg2QxTpRw21B1kWv3A1d7LENJVqLu9EzCEBpUWwFi",
  "key28": "4GwdCdzXaN38APoxMxxAQBNv6tMAKRLcfyrxSKodVLcjhbZknBddrEzb9QGwwvVy6DgVTnACqH96cK3DnGspuKAk",
  "key29": "5ZZGv1SpCMod3VTPfUNFE69o1hB1WfPVPU4YBzyGfdPfWMsVV2Mo4sMfDERrxfh52KDokT3nweGE5n7ev69qfPs7",
  "key30": "VixA18oN2XgnCdWmJygQoPsR1b3qn61SYx6L43qraUqNJZ9k7Ug4dA57ZkEiS5dRMRLTFjxqQnTr2CLKDPBK12k",
  "key31": "5i3NRMs4UP3j1ztoDibhJWX6XGfR7SFmWBVTtTFS32pMDRwBHVZmeXScJVyfMcnsekiFLrjGdShXiNAzx8FYWBE4"
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
