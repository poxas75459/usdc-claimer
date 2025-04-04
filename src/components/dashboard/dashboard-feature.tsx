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
    "8GbkqEY9sGwfLYrcbY272rEKjuuCexiLe53pBhyfeMqs7tfXwPDUBmgfG4NCsSPn94B8p5GoUkV2W15HePVnEEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKAKQCt3dfDQGn9dg3zvQzpgxvhcPYE3PKZHLEhT6nMgaZ3qnCctjuGtPyUQofVjnrP9xGEA28cEZ7yQ2rK3akU",
  "key1": "EYUDnxRHJ7RTphe9roUBHw9b4Hg4FpU6s6zUuqZZuaad28YraKGwy5FBZCjXboxGvVj89pyF7KAm4Z5A5H9mUBo",
  "key2": "2aHorPu3chnJm5X84KeyzvqXRFYKxp5WMkzJ7yunugTTbdUiDmiLPTNYMkXF7A8fnPySmMNtao9Hz6RUYQmgBJtT",
  "key3": "26RPB4YdMFrcgG5voGkk15qdwngeVwJpJnriMnUnZqcCJJTcXujJvpvCfP6jS7oErT8pEvh6xfAaM34hbDgzSTQo",
  "key4": "ZZkjRjoenWL299LuqeKSzg1wBj8LgGgo7wsLQEnzqKQt3fe626iPb5HFwr1rvammWeqZU8APQ7th3oucxQAJFe9",
  "key5": "4mWyEMGRt5pBRWu4tVimRbcWiqXgX7YQmerFVMCpmyVdVGP181QqGfLjedcVgAfdkGBgMuS38yXX3g1962rXdkZE",
  "key6": "456s3KjmwvLcotzdPm63GcJtR7RAhEFUWi8wG75osKEVCyx46Yr6nYJBiHbJou66JcobHMPsHRs7VmR5QshVJCiC",
  "key7": "BrFBr3Vx53FxWL9ASxWP8dFUL3nFEaocmE7CZP79uvTd2jf7tXd6opGGusBj9GYravpqB5poLCuGwWAo1wGaWJc",
  "key8": "2nM96ZMjQ2yZM8FVZW7bRvgCN5eqhU6dNbBz5fAdYtTT8rdjq6d6dawrPCfchST3cPZcaMFGow9KQFFPXPP6fdBm",
  "key9": "49UBJ7vCnimTK1ud1rEyrnHvBr59bGZUrTtbpHSCod6gFLBQJHznikRogjbwiS7uya2TFE6LFjWQb7frjqTznQFY",
  "key10": "4cxkB7xA2oD364hK8Lk7gHhexNF5sBGAr6Y7bsHx2gbYY9J2wwtxa2dW9XNFoHgWeTUcNzd6BYCLWbj5KRXQdmED",
  "key11": "4WuVW1vRwhHbJDQ8B7HEEty2EcVGAdc2PLPcGdzBRYeXmTKgCwxFfrSt2CQFW62DjtB3JEzoUdYaEdKikuq7reqh",
  "key12": "3JbzTCEQGvyKM58fcJBDcdx9vh93sn3unTVndwSb44n4uWJGsvHHAoU9o8tbyacHkYd7rRAL4r8sACVLgEvW7G6F",
  "key13": "6JNBnEaBXwfP5sYgUhXt6Quqk2kGWxori98n3egyAAmKQweDkCQzE17CDTp4jXaDLPS8KRUGuSCqKXWukaCCaKD",
  "key14": "j5x4NYQ9sxUYatLmWA2euXBMskngfoKzTmEUfvxwyCSKRh8fMx9jWigYuYbTHSP3QYkBy5w5agEYcJbxMasKjSg",
  "key15": "Fbc3UzNsv26Y1ZLz73kortohLGEBc9RL4HaAwURiSJKJzKgZtSye7WnDrRpBv7RG5BfpCJbHMkcHymQjBPTg4HZ",
  "key16": "4NkwnTvz19X9CdDtRsuTdG39quLxiFXsvtf6GUtFk8iy79ThmrsDXXx3LX6SPrdK3uFejWURWqRwZVkL1dZpnzW4",
  "key17": "49RXD4cxW97LbVEafrNfnNDq4Sh5km18ktnURFPxxHMfebGrKBBe9Ta7cx9qmYEeZfFZJKPzy4aEHznExhsW1GSG",
  "key18": "yiJ6uMNEENyCMBFqqand4prHF9baJht1vUiPW6mMXGftQs9TtLnmt5Krzu9bHsMmZwYE9QyC1GrJq3NGN1XxAte",
  "key19": "mMBo1SN1LbETuMrVf3SYAPmG51aR8q8CDDwG7kMZszVMNtWGAfkBNkH6NXEp9NkdaU2F6HAKbLJqZvSF2GktQFo",
  "key20": "2XbDZKzMruiM6X2ehEtKQJoXwY7TL8NNbMC68ubvGeKZJECi6L4J7Vq1A39ErHYDXH5EVt2oXBjfmPJ1QFUcB4x4",
  "key21": "4qN3YPDq23maRCnGLkJZTS9GqN55shMXtgfG4n6P2CW3eHiTGc3D7RDDWUuGJ24dnN7N2dM9aQqGuWWrXfCrJmzD",
  "key22": "3u9Cd3gRPph37PeFkDLjBRtzquT1VT6prvYtpA335ua8xoTewfUKab2TavxG4xP2c8BWPK3w6Zfg2yvTGy5usgzg",
  "key23": "3QCwu4skE26wCVNyPJwThF2C5CkDNCNtLiWQNXRNaADtuKuA8EinUz6Jm7NNkqVzryJmqFKTcd4KFzhSHiNbozC",
  "key24": "2sYeBeSAhEYRyVcZgoefLZgGCcwCbrJVMeXoPkSCh3ykDauSuBTKbBgFwywR8brkWBNWgqwr3TwNSixtPktR8hvG",
  "key25": "5KAnDYdmxrRxiVyNxCQc6n1TXHeWKZrD4bbQMRuFFcqoU3LPVwo9GUyCJrHvKaYYZkJAk5eJTKaz9XGrw9fKZJUD",
  "key26": "2JqbZoN2wQc67FC3nY256WLmYG8AXNxjZhEKJEmBnMRMrRV2dKGtBRbvJBhRqiKX6MMvomx7ucgYytPvGMmkd7vJ",
  "key27": "3n95sDoBBrjwxArGuBg8vo4gj7NNxPEhTTS6pv1QvbMAqbXk9EFp7ZavsPZh5tLVTcwje6xBu2AfjdQqH1G6Kpvt",
  "key28": "13TURoZjHPa7yjswr28eFpxSTHEmHR114Jp1rrThjGpmWL9GmFDQWTGoRBpvZ4zYEuzSA5Pk8WM4qkVYgxMRSv9",
  "key29": "5Rc9cQeuCKJjZboK4QK2ZKUcnAGZjy1ctiJj5trbq4ZpjrE4FY6FyTwmAfoaP7SDV37BPvqNABjLYLuSkQj6shHZ",
  "key30": "59f34WXcGVh9ey7UWEWoj62U4P2GVPLR7c8xaxajLSZZxmBN5NpToeGoxdC2e2UC9pu8qTJia1cUkTcJsQQsUjr",
  "key31": "3dWQ86nC3nKjMK5NpRMhjT5mwztvcGF4YpdXWjEUGYqrbbMFCUEeFn9dAUDcuBzukSyLSenmnYKgCLCux68K48m5",
  "key32": "5Eh3c5XLL1pCWGJTRbX5tKRG34ftkPrxhhUeDT2YgrGm3amhLs5sqqPwDN8o4GECTBibBVAj7yvU47i4vMBBPQyz",
  "key33": "2CUbrVHJqFQyQH6heh34FEGAyin4mM9GJWNkLJvU4uifjQ7Cvm5yoJJRhBqRqyLHGspmqSmhJgovxo5xjnhD9dtF",
  "key34": "2Z7wo3K6HsSuf13RrkgwsksDQhMw5TV4dUS6E2rFis8H8LYMNqzjPjkhhZjgDCt69ec9tfdzfa8dkNnQjtjm5PoU"
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
