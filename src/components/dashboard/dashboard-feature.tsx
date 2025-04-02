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
    "59C5k1FxapvMjREdTmKiFFFxz1o4pamnw16BMtaKWM48Avhd36WnuTCBGWLQMeE7nrNhpRcYPqwBottxhYp1P2j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QyV7jothadTLwD5wQdBLuRj12WWrjSq9zQvVYKhm3qUWXsWVfc1Fhzg6PFXPX7f6SC5wKYHHAEJc3zZst8TLVj",
  "key1": "3Layov3wi8UytfAhTjj68L5xFuyCoHPoyeM68knaFqEzM143B3C1gNh5CVXqPbhBL7Dvvkc2VxEFMe6aoaLEkBQ6",
  "key2": "4n4ft5bBAhUrd2KHRRv9zpqi7fQMuDNhsDjnyCSQpzbi7e8VpUpiXaSdAMVM7Emvc6gwq61m57BE9X8qyaLAaZKB",
  "key3": "4c3xQQvHbximbosuqHtGdBfzxYNDGkKPEt4jUAiNLNQ7QdrFXVHFsgiNskaXqVcACQKTibCzgtz8zz1tRdwoLzMZ",
  "key4": "374btBLdqUEJyecr2v8P3M829Qvpn4Ef7DFkUE9joJaPrQHb4uVwkx3Huje1aXvNCSiJraPZ1zniQ78ZvCgF1dWS",
  "key5": "66FzEGLXzQjoZy69ZgC7xbmvfuKNXVfvzQfWgZE1GhHboDGB6kQpRv2yX5mV1XdQzf3n2Kwa8DL2XJ9aKbnUCAa6",
  "key6": "4zw4YQCSYKPpaFgxKr16j8Uj4uTZRPJNenUs1zDU8YR8v9giBfW2rJder9u9aTXgtMpu815RzbBM7UrXrz24HQkc",
  "key7": "2FLgrQed6UJJo8e3uLSNG7UxUtP1L3jZ5HB626P52xt8qCK9mkkTrGt5xgHwFE2h4yNA9DsxC9xC6eC6u2PToDov",
  "key8": "4UKmzRih2wui7ktx2o33sfycfvZADaxwxC7jzaLzQhH8WwVXbRNw5c5jyonZPdExTTppDZmHtoiiQj8sMrwJLc9M",
  "key9": "2FadG68rasg8Xg6Tng1PxG2XBfnDBfGa69SG2GWTSrxdjRZbFSNn9qizzDuzsMfAuSHoWsy3Nd3Ed1TNVJ5ph58u",
  "key10": "EbgRkqFaThxXFupobQYC4u1XvupYmeHWtyTidZdSn31hERZFLJ4ypXdRDAWmVrovTvv85eT2rRrcxgE6RWEa2BN",
  "key11": "G6NfgcsLTHbaPxt9BHWh3PuP2PmN4dqzMsFmLdXPwmK8E5P68xnbvEcnXuN7nB5Y94ou4wFMmQWDo4TGFjdDfkj",
  "key12": "5RLHoq3w8CJ4B2bXuDtX4XDYNLfAaWwpQVkWvK2DwzPJCsw2Dg6vPgiUdQaDEh67DFhPmQma9sa1vurAGvJKdUQy",
  "key13": "5oZGuDQ2iTxTBoo5mpZvq7xzAuZYzvwmHU6ybubGzkVypJYF89NTANuSK8cc5xzQUYpw24Hwd1Pa7ysHyQz3TNkk",
  "key14": "5fuqTgbSEHwTKaWJKDGEuVkktd4sp2sLDbR2VyJ9gpVvRbMf76qG2uCRbQKq88D7vkg4Aguk7NFN49jVzhZmcUYV",
  "key15": "2PoJGo4B44x6kBBCbR6W73YYv65z6Ch2nFhjEi7SUNwNKZiBTmVk7x89t4uQfbXpgfHw6TfnWUbYLn7Zshuu3FEZ",
  "key16": "59nv19rR9JsdYR2mHZhxuJwercLzDmbQhWSLLBcdN4GKZx77ApD5eHQnaVhRYYNBfeKg1bGnDR2CUNSDgwGjTTpY",
  "key17": "5N4pdb6VgdSYEjYQzHV6ymNjHBCdKzEqbuKPiY9ML55xNKcUTUf2WrbQYtFwvu5vTzZzr7GhVcR9Q1kiVksBnN1h",
  "key18": "2ydDoRiX5eV5TcnjJuxuabCZXtj9syEr61aCxiuqjGY2kMm8h2GrpFbavXLgkrc6nnsaTUDEysho2BUnE36Q6DuS",
  "key19": "4k2fwPafNMmVjVet43ZmFBuxugc4QFBzhTvCwyKQqvjCp8ATmmMqUE1UCWqbpfatMwNcMJVBnZu9JfU4TdSxsNv9",
  "key20": "3JRrh2QDBBdo9ijQ2AUn5pYhudoKbZQ9c7JJM3jrvz6Xs3kRhkrCaJqmLFMUN46cd4uLvhJx83NLequoYHwr5aT3",
  "key21": "4k9zK1kLcMZPCRzTKS8D3A3Uw5Kw8qmoXH1pHwaBX7SrcC1wAnACFLh88L2Xytdyw1E68fGck74xZZLGeiCq2A24",
  "key22": "JyrWCsAqeWMYRnAzBn1qAECEaCyEXk878CBtvRhkDcm9njnvHmi34n47DkDL9edqak9Gq3f1FQRxvaqDggRCm35",
  "key23": "2JxVLpNq3Atp7GbHTtjqdTYgYMPBDEnxuunLvYaoB3AHoYrFvXyvC4tUpkTMQEoyEDYrmQyJHtU66dtRzX5Rjzf1",
  "key24": "3ukurz9Qnh7qyo7f4uSjioRREH36y1RNmS55K8Jws6ULQ8Y21EaExNbzPDJVbBYnYKeu2k47DahFV157MAv5Pwnq",
  "key25": "5s27NHy8yZK6wxTSNJqswUNCGzWUe4VF2m7C4RmhRikhWq6HTVeq4hnhdBCHM9ywbGPvwVqtp19BbdU3cEhcxZwr",
  "key26": "2Jtbsj4XrGTjoxuNr9SefgfcCzHQKCMFknCpGWvLEFBF4pfUWhXGvgK2t32SSRp6afd3nUwUAC1w35TUwmnrfvCS",
  "key27": "3GYWY3Uh5trGKPMjzbH5ViMNzRDFNQLiDZ1xtvBD74Nz5w4n1b1rZhr732LUT4JhDkd9iwZe9nf2KBAPH3kDNvi9",
  "key28": "NpbkyZxDao7pxosehkaaiZkcY7BtomUy8iWgbUgbWFiDaRp5rUWBKDDc8Ske1oasbBoFb6YKLbGZNETkbnqb3fg"
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
