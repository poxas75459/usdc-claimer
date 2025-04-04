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
    "CKspNEwHdDAvqmd1JYDiuWkF26c8rQAKam8K61M9R3z4BxkhSGFkEFzNSqEqeeKErDesLKPq5zW3Gs9KW47LpwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntrwAWx3333CKGHtwCh1FyUwnxYem5ktxCgz7bVDqtM9qtyhHs4quiirmdzyG5jVMgVwB67bqYt6hFfiyaVm3Yx",
  "key1": "4jCsRvPpBFz2y34BMrjxEkCzen2tBn1skRzHKbWhRoyume8FvD2XKDCvumfpCVumJqM2Vk1KGSZaUWpCZ8rSRdkT",
  "key2": "24rv36hJ29gikXdEKrNiCTWtNcjfR5xmC94vREm6ccNXtuuALXn4W8nuSg5vA4wn2JHgzgMfv3y36pJ74D9PNmTG",
  "key3": "3CN4XP2rEBgN19Dy9hbUgph62f7PkmMouBfAeAHnfwRR3vYCqQv8AtYLCrYq1fQ5dqgeph1CNfQEFbqUQ5Gpgzrk",
  "key4": "4GfvBXdW6p6G2k477MepSLXg94GbCtrbCP8bJ7Gqi8AVsNdLENCwVXKqWbZnvzSnC2nRSJhbyr5atc5wHcv71thg",
  "key5": "4DZUNFku6wTWmc28aJSc39iLXbjcAakPnoUXWp2tu75qq5meksCvRuKCHBABmXSAsKUFYDuz21o28Ae6dyS3Yg44",
  "key6": "5ua7yMKDv4CLnkdx686fNZZ59ayKEfbpeaX2i3D4cYevmEohWneyyt21TEXBWJKnwzp866iJKyn2o3SdwPcTaiY3",
  "key7": "4dGvRymhcXReFAsNWQWLvnQqdADmCyWYiLB26te4oJZTVgGMu2m6pcZgy1HXGZxoEhBqC85zjajnm196GSUWAbZd",
  "key8": "5gYNhpU4CrQeknkg1jDotkKKwsdYsnirFdXbrU35nLcYYAtHjc3Rsy7cDSXFQHTbe4Q542kDKAmzKK5tEYYrkF8x",
  "key9": "5jsn4duFciofAdWWj77NGupSqUheVTjXBAC5QvZ6Q6eknENtMrJYK3JPb31iahzFzKe3rLjqF36zPNKu1ts1DhP5",
  "key10": "5dH2yEBiUJQxeL52UfXSov5furKziG3L9GZVEwWHKUzMZpvLTXv6jfTXtCUF3zBNvvUY9nDsaNNPkN3s6YKYFSMb",
  "key11": "2mauzYQKNiMa4JFEymL9DSpASsq6oSpudtJt5UEaaoHTzTjP8RuWWAdaHDShi4AUxV45QnEqxhxohXCmacKBgzhw",
  "key12": "5kzZqECUzXvBW7M4wiUiZdW9GKavhzbFDryn3s5zySNBFpotPeF69Hn6b8W6HKFyFcpV26Vd9ckM6p5W4AtGqLuT",
  "key13": "4tPaTGF392ovwxZCn8xw6MZyfkdaUnQVFSopdszZDJ9Kshjibw1rE9HdWFQP3xFMqzHU5Rv3trbAQUzWVJwSqt66",
  "key14": "T5CmtvyAh3noZ2XpYsVG8uspUmXphq879u2m9cdNrp4rkT9y8DDPAk1b6cHPR2viQQ3CiEHhgt7NqD1YjhZQSRf",
  "key15": "5VnHvZaKQtWc1F2RNyYQnGHuqFvmwverdGCjCiUSowLhiDp6zqc43gwCGf2JBSgnemm1teL8gH6oqPKWYA3sW5vu",
  "key16": "EfHEfcV7MYVVQm1La7rFwX6WnwTyszidBmxpMy82LaAZwzEYJz6snE7eeN2FbGyMfW9XZVSXNPVxUMJAPXZLQna",
  "key17": "3v3uM6FQJBPCjWPUCsmZ8qWQ5K5ELqaGNUk93VULGQ5dpcyaz8CjQF4VuznLJUEeEyvekRcd6Z5j1uyQ9cRNgH94",
  "key18": "aNrMUUYQWzpJPLbPcnk5n69T6aaUNdvReX9FkxFQxizeR1EFtuh24eb762WvmzYGcY1FCMZDcqZKBdfRrj74Uqa",
  "key19": "4ZqW6FoJVuywioQPKbrGymkT3XrWsqiVZw5BJURmmmCD8HmEvu2Qrf1Su5Lb29HLTiKXZLiUxdosBo4dJjbUHvQT",
  "key20": "4qHmu88YPhUfWfcVTNZoWMrGx3Crv7yw9X7Y5TF3dNn6vvWEy8k1sj4KBVBxRH2o2fojgWbB1GBCpANv1Yc74Vo9",
  "key21": "59DsSQju7Nprnckc562NCNqPdww155fn7AnSFXcEjfWRziXDDdGQFmrgSwYt8p4kHMyfSHEWzsbrrPTAgeV51uje",
  "key22": "5GiNYnNWPVc6gf1H1Bh7bHUZywBtEFnoTXoqwWzqWjakbHPjWa9nbRwExLsPo244RAVEAkGgwEAocrkeq9SD9DnP",
  "key23": "5MpKVD8A2etAsDsTwhWLKUzjBz92uMX2w9KL1dao932Cte4pFfL1xJyV7najUEZ4nRKEv3vNT5zAC91Uy3Tb258k",
  "key24": "5jTywk4p6RDdBLdRbLFfEPad7Qqxf64fJN5YeqhayaN7DumrFY6w52mzpCvn4VuMAmi8un39xTR8D7PamHZ5yHkg",
  "key25": "3vjCVotovWnBTcUPV5FUMMYkmToYEt1rE3qemEEy6J7TZMuvipt929YbyvD8RZWKK7A3tVmmtJDopAV5Bcv5aVEh",
  "key26": "kuveWEPPPVCENVdmWLqHeJ3Y61zhtKyUH5axu3ywyJt698GsXzukJTTHTZBpkkiSMmgNnTp99vnPzLy1RK2kxUy",
  "key27": "3fePNvRWhHS45AfCFJno9W9SN8QinMg9o28FiBEPtebFcb4GvgSqJbpKd4Pp6yX87Hpn5Y3J1P63aWNEXm2XLJyN"
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
