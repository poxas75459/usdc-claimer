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
    "5JE2gEHJNXE7x3EdqbQknkKAXQz58RB2gbx1YBxEuSfAhKUeiKpY5oa8TXQ1WnLd9mWZZbdLQmQS1QLh5dsdPZbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHwAmZuFvyk2idwB5PhSAb9wW4kzqP6pjMvXozyranJ2QtXsSmPJkqAjWrYvRhd6CyKnwm8v87Mf2MQ3Jp8JHEg",
  "key1": "3cS1pKpVCXCen6N2QqgaPQ8yiqGsqqVURV2rcysJVk6pE5sCrAgAHuSnMcxFNiJGzmbStBq4LdBuzgHDsU6qniub",
  "key2": "3imkmrLj1B8Y3S4vi6M2YQy8UJ8dKH9GLNmBprUaBRjtwUpms9t8ZLYg34F5aguspEk6UQJTb5qqWcLQ1QZF2cU1",
  "key3": "3Dfg3U6Crq2h28GqckeHeYb7WhzmGDJtUrrQ9oTuYKjEGScaEk9NGEYbAwS4YgBsEdDMU7BPLuEpZhDCKJkw1NFd",
  "key4": "3mcEk71dL5suRRuN4PhG3Fg957uXARHMapvtPhvZ7SvxJ3RaWByQYutPS8yW7CzqFarPp8qHQGMjgbETwH5dq3Uo",
  "key5": "44X385ckojTnJb2r34J74tzR33PMHdL8dTs6Q8C22CSyU7qpvo5TBmoy4oNahuSkNCQsinzS28BJvh1f2zcEZbia",
  "key6": "6hZgdMb241q7GeWkomtr6z7wQ4FQ8ShVbVR239zBPF8dTTbq4kMDy5i3QDKQQT4ukcFnbVo6tEyNAydnVVzgAPX",
  "key7": "4n4f58aC9cTg6X8tPhf8QuNKWHC4UC3eSiiwt1QEUuJgBWUeoKxFFfkgJioVm7ngqBTfEd5idTKdKacYDWKEydsK",
  "key8": "5zh2THMn5imQ5SV2UEUzXRSmU7TKuC8XLnGemZGXEoZ9btUP49hWdcuzLTsngPtrFtrwZNaoWVsD1TbmsoGYYVRz",
  "key9": "4xjBKkS8NiEDQrKCP4dfzzkij7ai7gci3J56kQLcMsJXdmYcfykrzBC7vXpKbvDqRVHN2ehx9bgtJbeSxHppfhUa",
  "key10": "5uevQEjHy5SkNxd6FLEyfrRH4Y1U4BtCJTmpoSPsWFd1LJo6e7KdxqA4McDAkmeYfarx6QuMqSTfb7kbVkuauHC9",
  "key11": "TUwKu1EFtk59Q8TfEHPs5z51t3g1EFdYekWsGR44jepgTEEhE66edKrqcow3r4npx6ozdoCuBEJ8sBDHFbd6wat",
  "key12": "3CtrMMSnqrzVnHRgvKoWp6vyGLWhYkVieXoojKdHqXqZQtoXxQFhXj4MYVuni8QWBpcmgFG3Q7MoLWi7oYDDq1Mx",
  "key13": "3zxRpkUPhCKyfC43WQ3PMRFFasi9vciYVVs3jgzyKevRbsvtYuCfpkbaxT3Bw3pShv4GsjMpbDyXaKARQb8cDebz",
  "key14": "EwmJaJ4P1zNfiTvKrw2P7pRPm7agbEaxzqckr7y1BHRemoVzYLn8QWiiysdg11iCvbz55MEUigaNcmSeMSY1geA",
  "key15": "3AsBT669FqG1jxxHSNPnFBeE3SxB6k2iCDpc45bpQZG3A5dRxGfszpjZ6uHouWwDJmr4Tbby4kdn5V1asBG5C2Xn",
  "key16": "3uWeCdpxnqjMA2MZ7WHBi3mhswBB1KBymTr72RK9eJ92U89qgX2EgVEaJtGagHeyVjCaaU3MNGYrGQJ3fdGen4cT",
  "key17": "37z2uiDHjjpbqYGa3qjLaiTBsjm25BEqXpcYmB8xLLzeLXTpNfGwf8yXttDCGadveD8HisNPbyb8Uz72xrnqFseP",
  "key18": "4UmWUZMNiUSzdjwry9gUffnNgR117Ge2aqeR7EoR5KnSyq4ptXHcb6qzfzaSbbHvJPb5wCPGVoDtv3r7MbN9CGAu",
  "key19": "5emSF6s9FYKktg1cRWyusRGtf9TK3DY3n1zcmFVjBxiLr47kcv53ULdaGpisHAABpQTLwdeBfVw3LDLj2hymscMz",
  "key20": "2WPE7ty4VhRDhKgyAzGVDfZkX5yEHmQUFR5ZFkipEVyZrp6jsYZPhrwU7dhA5XAVko3uQmSXSZuSSor1HZE4pSUA",
  "key21": "3BaPPB5JbKcXKmfoTaF74Y74cZ4ofTNVwfmvvFh4QPWiEarG5x11gJskbhqUuhH3qNcsgsrjfH7LkUFC5Ue5SCHc",
  "key22": "3HbE9qE39ZUdp3uZc1i89FNxMtthqziBSJ98XwPqdQdse9pEmyw8YtNPqaFXBms6RNDKV5nr2uWwg1ueXUKKwDEW",
  "key23": "3GeAPC5DpVaBK8theguiu1zeJduj4anTfWXNq2wkcNxpHcZsgLafRinuJgjJJyK1Zv7MuSB8HXmB1wk5npfKeZUg",
  "key24": "3dKRLLXD26nCsbJ2ByENCqfjjz3TGdUGnomduPuSidJmQ4HS1eg3QHS9Wcfr7rkoervJiwfu1wZc7waF687fUUSG"
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
