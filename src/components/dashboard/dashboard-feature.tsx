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
    "YB6gDqaoxwqbsydmPLscUX1Xy6XjdBuctPoTxaCYDaEQgXrUocPLKJhYhxQ24sPLfVBXJhUWECDvJDJ3YXbZuPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmFwLTDgaWae5MzUFtWZhYU23QDbNWhXipzGPE4ZfWrTm675FQPqzm3iAm4QX7NJTtYoLofBmAbkJDAgKQV6k1U",
  "key1": "9gkZPqxr6s9zssf3cXzxdVAXq6WGTG5DLV4wLt7voHTjHhhjJE8tYPAWfFr2tvEhteDEfqofbo3Ltmk5vUSzPzh",
  "key2": "2dM9X2s9MgKBxgCqBUxJkyjzWn4eaAkqjo5ytbn9P8VbTnktS88JGjAnd5nhPQTp2ZXS5wHbPVbrKk2Ltmcym6CD",
  "key3": "7EKSuoFFP2T1dVX8pHeFVCvr7bhD1KkjMxeKEWtpnv57417MgByZEiAFkpXkPs5sNLWe54VxPfYvrDSVyM1nmgr",
  "key4": "2GsSLc5woReESFNReqwSgWPvaXsaXofRPEnC2v8tufLdqkHJghJqMnYHf39Uq6CuRDovLKdcfDRK8cTAush3hZAb",
  "key5": "8aBcHSGj6EF5xodp9aMiatGRHHev9gDKP97z69C2fcRppsFSDpYtCLAvkMmCfXLgGBupEahdk3xpu389jkasCJn",
  "key6": "4TUuSL1A1owGQFX2B5h8spFjBa76NKaiTMCmVKNmai7L9Z4g4dsV1fX6gXBXJkL3PVhP44kWXgJ3qVjmJzSN68dL",
  "key7": "2pLJjzQorCQLnYtxfbXfvnZnMq8PeNsUk4H6dLeJfs3HtzZKUwXUkVWyPUVzG9B3yySbU8XaCEZJsonh234sBj1F",
  "key8": "3Bk4AUaXjpsMDyLZJEP8G4fmyFoNnTUFRd89grCquSFagzXqEdF8YJYxFhYZB5U49Csx2WoLbgx66FbcsyWwsDxW",
  "key9": "2F58qn11JMkRNd3fGWs8a6ifhVLbgLHehfma9vjT9f1M2z9Jxn2cGtMZ7nKqsfdECF9UyrANFTjBT8KA2R9oN39y",
  "key10": "34xrEjbfuhCWFkM3eK42z8SFrS48H3BtMva2kzeoypHYFFP8qnq6NXtnpULcuBn7WcyAMmrXEnuMEaFaR6rTiz5N",
  "key11": "4P8hLxMphR6jwFdwmrwemTBgvi4AyEPeL5zYBTEmLwoWQxdCtUPWGU6XJDuJa8V4A6YBP2V8BCTd3ZfVWWy4DpZp",
  "key12": "8wK2wMEyotKY5GwC7CKAtY2Gzyo1QibvuovYCz8gDmnB82KAXTMwCrLWZYSLaJMLU6QA2FDQgGqNBCURHpj19hz",
  "key13": "5nWJXf8ZyYB8pHT8LEvpUwkUDkLYJUomoZ4tFk67kE3Lp7FBf61Lznmt4iSg77X33NewpwC5bvSfLDhXhLdw7ARU",
  "key14": "67n97WBL557ZaWTZRAqu2AxpuGyavcMiBMkEj7LenCc3sMQxPhNYWUicDavtdzghC2YyKskq4e63sPyABsm57i9L",
  "key15": "2iccec6gjggKqyEQwchuVqbB1WEkd5yciKn693xognLkJaWXvG1ZJgNMkgbLtuULxNApJ9Gg8dNfGnUqQxec2BZa",
  "key16": "2CTnSXwSfQ6RemGvRATqGoYqUQoNHtwtpVxza62ixQpbou43duD525KN2kifB86KehnQva85d8wiY4fT6qGciT2N",
  "key17": "44DcGb1skGF5EhvkxTYQuPqRyXMksDuJwjbu5kq1FYfgzxuR8skwsxCftAQam3zPd7Pcpkhmd621g5seGzaZc8yn",
  "key18": "228NtfhdiB39dUsa3psNz8GZjSYWnrdEfCCoRQsnoxAHyjnYLRBo7qFXRmp2tTThpMn8h9Ab8dG2c4JHWkDWNPzr",
  "key19": "3Ki2e8HBYaV5CFrUJvF5Xh1ZfQkrdbpKgYiLUEmMGcv7xmYz7h8YA2VpPdyyMLhgdWcQiEArca4Md8aVwDbCiD1W",
  "key20": "3N7K1qfHR4dPq8V83E9VRmUvTZrWXCokvsHgfXapNRR1Xdq4jzth2y7G4RnY9XZBMn5Ycaw6bz14XEi4mjZ5RRyB",
  "key21": "Ue5h3dHULgJLHcsqrPAu24Gjm7AtmyVfUMLn2yX2ywETH4VAhnNkW3nXy4nMeKSveEKUU4a7kK72tcFerNobWAt",
  "key22": "33qs1FUGc916LjxYoLPVdpRcbZqP2y22GACLpzEorRCDdsnvikUiTR4fmXJinejSKKLRDmpfmxrLUufpMo9imN9p",
  "key23": "3ZmGpnpZ3HsiEGGvENA4wcF9MnYMCyNtWneLM13U8FiwGnJUFqdAZKebUD6NpYdWbsA8W4hVSyUS6VEUzhnryZHx",
  "key24": "4ymZstJEBAbUhTapuk6dwhbPUsZkTLwJWTs4ZByPyP8EQPpfPZXDhrgCqtosu8NGwyc4scriTpANQBUBbGf5SiLP",
  "key25": "2a1mWvXtTt5km4D9uxd6KUoLHf5eNtZj5TeHS7z1ThEjj6D84HCG7xW2r1jC4yLK6bVfzYCUkPCC33xihL53vpoq",
  "key26": "2wwXSWBEEzPHWeuxMfosYp5dkypiQAAL1bVTqYggqk1Psiv2kQd6FrqdPy3AqWaJs99uCc7Gimb56YLTGyfeeuvS"
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
