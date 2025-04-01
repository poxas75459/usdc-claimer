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
    "5ctb5fCaQoqqRE9ubdoEQKnKXFi46U88cffkT9gywmzDHubJjLqJN7CDXCx2C8GwL5aUDQUdwhEugTD9jZuQY3z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pjy31v7mCEUGhbcRmzvpwDwZW5jr5J995CGEzm1m98PJLGUjb2iw9koUQ2gtgCHRR4HdLuq14L9vjKALvdcfdU5",
  "key1": "5Ja2xX3F7n3rPN7DAjRwqsEDR9ruFkdyWE3q4oTAZrRtDCZx5i2efJS8U4VdxMxBHegMqiRQAphnbF6erTDXiZA4",
  "key2": "34UFt3iTQWiTeAjN9tMMUbgyaPAafMC74cKrTY756kZAGSkU525EQKBYePP8nnSKEcAtq7VVBXRjdZseXcbi7t5J",
  "key3": "NDKH6nkPeoEAqbEh1aGp7TyvipeerTkFJKe5ftXToTPA8YTjntpTx38jthr3FPhmG2jSBbSQxi3rojcwo5Y2C1w",
  "key4": "3yo64hzFf3akDY5xebGGWJLNKstPdBwj2zeK89g7UUPr9bM6onPbsqcVVf3g8GENX8s6Rp7wgcA3E2AhZU6qDB4j",
  "key5": "pwspndfDQarsNKg4RbNA7jy1XFejCLvkcLQXLZLpfbLfw8ApEMT1vx63kGFJv9AsAatRDkqtK2JnHCWxz18aYYM",
  "key6": "3BPySTYwr7N3fpmUcbDCwZczQozCKziDFmQF9fMS2ijtuh1E6DmEjNskxbF71SoemVrn47hkLq9qMMc2BFKyodXP",
  "key7": "29LyUgVktCiRDoKAE2zwk1QmuirkogjFaSwLspTacW7N3oubdmU4He79AMEzSjSALeRpVDQL3BywizTMDw3Wn3pB",
  "key8": "5poDrUGSNsgUStkKGxP3q9AvCGcowHbr2wwTqeLD5W9U12K79eytZXusTePW6ij4ojkB6XudYMyBZeEE2LDDE4cy",
  "key9": "2xJS9Rh3JwVmwK6fypdSo9mnvgf51unKpgQAAsBCALMC1VMpmKsU2EBcuFZPy5u8nQavh6tY4TBbqF4SckXbGfZS",
  "key10": "5jgpKtcQxm8ywhznL6ds9QjD3TEvEixi3kKa6murKCAL1Vd1JZ7YgHFpJZmc1jWNP4XXMnz9qftvkcSqp44UvD3s",
  "key11": "4FW4cCKVBBm9nffJ5q67FRhri8GpXe1YBN5egddrL9ZyRg714xUSpjHyKMXyMmU22RjGLa5JXpudfKUiDZqXrNht",
  "key12": "FhKtYGEvmtYD8wgMHDkjGAB7xUcocd6uumJCH3bsNXXjzQrQQe4M2zuwpZGLeWUyyu9q7uFyxrEqvP2jyaVVhLc",
  "key13": "3P53dcCNXNhtUe5o93jis5axZQe6Rn7giRUUBexoJGy9wBQUaNRAatMQNRyisudCBnEoG2w5ELo42Yj6Sc2cJyy8",
  "key14": "3vJPFBHXueCz7AKzei4SnD6pMiEEJgaQ5ebp3eCbrbjrdaK8xywTDww4zS3AdKgjrwF4DYAZmt8xGi4zAMFvbgYf",
  "key15": "3kQ9QXZhXEpcqe5iPnY75gfSWmpEJabo8wWdKr5dzTxezBWG6FrFxgvKbK6L5fudPJzmqXHTKYzhXbFC3QtrCGLi",
  "key16": "4kGzT3xrHtE8ypgBjzKzGEB8ArsQBRHjhVKNmA61XizNA52LmimmKusAUo384rVfdfumCntg23EPPpCwuubojhC7",
  "key17": "BUSdFLYz4TiWftJZ2BhP2UrkX5cxXZTjyKxa5UCMaDKtTV7QYPQhv6oJkHmWujzKhAHJbaJ1heD7ZDAz67yHAyN",
  "key18": "3VHWHQi1vTKz1dJNPZdDZqvJgXWgehKcnLtqMWJZhH835cHt7nbiFBDmJVV2Rzg4ZMNYrEtLrpA8W7SMRTLLVTsC",
  "key19": "31U5RAXBz3NMAT95d9yHvPjbSBwXjiV77aXmSh9fWgkLntvPJ9jzdANf6tr3SizT8QueuJzxpooDDMKTYMQBGa2Z",
  "key20": "5QjrdCrFuLjjAnnNykRePpSEwN6M95qFECxPFAmwQTXoKYc1Tr4JAQvkA2BripZYwb9Cm8kpAaAsPBKk78A3Piqj",
  "key21": "2irEfBEqCmyk5VGeUDEzHy1BYouKaR66KUSGAffq3WUJcr7NR4Daiz333SgczJ7DrVtwazMLn2F6igEMDPc68DTx",
  "key22": "3tt8g6CFCmDGQP95wRRuq6nksDGVyVid5jhaSn9bta2ueY1hhSqHSciu9Fm156dJDcSj9pro1GcULgXFerdk6m7",
  "key23": "Kj2gj1iynUprt1e5xRhYLWkMXfBDZMT7nRak4k7hq8bpRjRX3xfThkZZMLQEfZiHsuPE6TZTpSwok1JedWe751y",
  "key24": "3rtYMzJ3MYTMP11FS7DXwBCUDVNL4JPr8gSBGRy8ZXUN4AbMDCfEjZNLmSf8AiqH6ouhchj41YvKzY44q67eBFnH",
  "key25": "51UAjofpRiZxX68VDyTD3FShJs33GnyZPTjyCRXVH1xwATjqv24HNu6eWb1pYSe6wSQCEaPn2LGYgfvXefNMtZg5",
  "key26": "5ak8bJgedXtwKQjSK8b3KXRU83AHV4dQLQN7xyykucSj6HZTo5kveL2gNBjbMXZMp4m3HJmiyefk4NQ2hpie9sJo",
  "key27": "4TnxSuvU2TpSRqWG99ZLasp6pgw43SwTyG3WzFSwBzsPGjrYdCAQ2N4ytkKzeWmR8vTZC8oMAodvWcoqujsrANjo",
  "key28": "5eBXk6XVai6Kg9agGbGm5YagRkutDYEfHp37hbu2C2kGeDyeqLZNFyot5EdAPTkx7LvMpJRJ3VyXKSjhDZ3aGs1R"
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
