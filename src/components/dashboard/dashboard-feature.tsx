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
    "5jgpymSRC2oUMZyBx7ySMNhFJj5AEKuadptFHhULfFNTxiQDxGQ2odMdyT8Jnw4rtYgNqRFVhZYzMSeaJwASTbC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgL5yrHgHz3q3fS4qtN7YfuipPRnkkvBkgtGcKGxLFotAbHmiFr1i2C9vjkzNZ4GQSwy9LM3Lg3MeVjaKmyMT8b",
  "key1": "4abYfhWfzV9bE4evswfx85xDmKxfkcSqknVQiRvQrwzpVc48V82vajtRBsSYJeda7kHWKUfK75acKosPtHPsABq3",
  "key2": "5TCeis12TtQDTyMJyPCW2mtKmedUFrFJN5GiKwhKWZ6UzXJp9DXws5D5j2BQeFUFXNZ1KwR9APxBseygrfa9DLW8",
  "key3": "4PzvE8TCHbhur53hR23gY8VnLHkLzpniiiu4qW7NJFeVmsxcgixiF5W7X4WBnhB82fYYcAsYwZwN8VFHwYkBXoJP",
  "key4": "2tem7j886RJ1qfX6wtDMv1TNTT9ZJUAEQqeN4eD5f7M5JBZW5dssUHa8GEmK4mR38jhBfgGXZXyRFYg1QNf4Zpjx",
  "key5": "636XXEN2oH3QUkcynGX9NwYWYV78N8g4nP8AXdr68jD7hNkAEaA2Txe8iVxJpk3pWVSaMwj5fZvDNZx1QXeSuCS6",
  "key6": "5uKxZ4hp5rzY3CGTWphsq161mcdEzaMRo6ETDKSAx9mP4z9cJpgEoMMTuc4o5N1LTCJ38qESXRqqyGPq5KU7R4Mp",
  "key7": "547HYzVh9w9gW1xQqS8XLVB6cVNXGKLFYEJyDAQSHVyCMhPgJQe5Xf4ds3z4MmhWkuM33VcuSRNwyXZbYSsTdcaD",
  "key8": "52i8hqKpXtfEg7LRgaMYRy9rvkydrq4cKitLeZZ8sysd3shYySPcma3y7d3DK4juHXHkPVujykozRgJS2xmQoYNJ",
  "key9": "5sN9nuVdGxbJWgaw6P91Pgd95TTH8UiobdmkbJuo9czoRNFEsnEF65BQrsdxEbTWtEaRn8GF9w5tmGgPLNRPy8LC",
  "key10": "4LVEe9VKQNJ34QRqUi64ubmPgxKvAriZncdA67vKL15sPw5t2gqqGAXGsTGobYkGs4Gk83J9vRHQdX9WVMvi494K",
  "key11": "252ApwjDu81Kq3tLQXWScPJdH4TSESNtrC8eozVdS7iCZsSKigdnKeMmtEPK48LhNcf1gfmbkagSd7JbKAn2G6YW",
  "key12": "4ebCT2j9A8DE6Lq3bejeAmgmnKZ7nBBWswXp8xfWHenTo7Q8yZgt4vf4KimkwXELZcCit1CyQ4K1EUpbA8D3NtKe",
  "key13": "5UghmbSY7u9yqZM3zT9TK4Rrp65Dhh2pYCMU3ubpcFmLdxyeK1Pz4WfixiLoFYJUZP6maCmBKMvoQCXyaEYwx2K8",
  "key14": "2U9pbdhU8BXzKGzau9o8ugtmkGwt2bUHjubVfCN96y5UC62WbYBXN4VpKV1JArZqWxMSqMJCkDxK3otN1yoyAzEX",
  "key15": "3xnGaGpcJRqGPY7bisWBASgnPw7AKq1RhYdGpBCs68PhkQ5Qvu2X4yfFP5xyCyAPoeQzxQy7JopZyvhazhboQFKJ",
  "key16": "5ovR6YZyw7NBPYRayBaxSTzHsdzp8KfUQacrf7uUmSMiEAAPXhK7bxmQx18z9SALsAzx52Ttc7aCQJ34exeTA16P",
  "key17": "4a54qRHCcemB3R6pgpuavvmFChqYGcUu9BcSZrNZgd72iQV1GDCQJP32TbXd8ToME9qw2cY9JWVV2DVsxaqN58QY",
  "key18": "vAHRn6cJje1Wxp2VKwBLnUNdvQdFc954FAKCmcSCrx2hCFewTupdbjt8SmDVp5qm4Z8SkikBLxLXztwwYQRLoob",
  "key19": "5dipELWRqsFaGskZwZFUpEEZ374WAQc6qHCywaaALxUtd9vS4sjH2vtkct6Sx6RvVuwp1QhkAz1HdmqUrB2bJX88",
  "key20": "pD2mzAokK6s6L9R4QtHdWcxLhJ5fsJLHHxNduxphEpcyywgnGy8rhXdoqxpVaNDWPzcdcyvMTRFaRQzs9CWvXU3",
  "key21": "o24FkGunuKb11VS1TBPrn2gGAaWQroupP9eAtQuzY8nnoGa2if16t4bXLVSuV2r9cMDBvoJwNE8DaEbVLdRM8yq",
  "key22": "3pdKgCBH4FNufVS4tX7SjVHSQdjQDVWUu5YKQHs7HaaiXGtADHhBJW4b7rNNFit6No7g9AE3tY4ZaeqbLh5gFgVK",
  "key23": "5Gu5EiiJ36qipVzuk4KgE12E9xtXecY7c7HyC1QXJmZsYgurnqCwoVhDbamKrS5DzYjbhoyfpt1WuFkngL2GqzT3",
  "key24": "4HkChm5y9J36VdFMa9s7VgzTUjrM2nvHrydSb4qL5CazGU3mA65ussbvQwWha9exHNUhMYS2aSKBMEUnHB9i15RR",
  "key25": "4LeLRV8NkQpnH7wMfafAtKLory78QB5HEJX8SaKM4jzcD3cKJs3UWwXKt5yC6EUtg9ow14XfYsA9XmyPiazWxQ2v",
  "key26": "a6fHqXFgkMH4Xud4PpK2yjF2UU3UoLXGzyBeXY9sbPa7C58eAQcVn9GQf4aZGxxMTwmZijFyBKVB5Fmj4U9E18G",
  "key27": "2hmmwP5SigCH6EkwKSEyschXo8jsDkarqRa1XTHpJDJMzrpw3K1jM2vpJQeoHV2YBf9nw3UxCaWoRWovuZgCJn6q",
  "key28": "5b2JB1RNYSmfLk8a8m86YNxHH1nt3hj9gQPoPdGDQyQmgqvLTT6EL8wjXALZwMkLncuLK25t2PR9oExMNKdqFutj",
  "key29": "67ZCtD74xU1rv6aLRujP6CcktHnVBj2CdMwz14FNZh1CX4DCiJeNWMdNEtWW7ATY1TMR5mxc4ApdmQvHrRG5e1hg",
  "key30": "4vE3DBs1Dv5CKiSwXxvvsoJ7Zp3HFyRUdbQF5qoNF9FVioT4vycrKGYGjwA8JE5SGTDP9ZBwMFX4u9p1dSJHEaKA",
  "key31": "3jEvA7v2k3Y88G9XVERB2SheFASGMnmXJHPAY16iA1FcSmBxXKxp8cz8KUGCcdvjgfZ6MzhkBrhwGh1XT2JyNxJm",
  "key32": "5z4zSa7rwK9FZRA3xQXU4CBwjsy3E2nfiCEh7hCXzT24oPLfGTgQCBi6uvZwsK1YaG5H2nWwwKSTujviisBqcLTN"
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
