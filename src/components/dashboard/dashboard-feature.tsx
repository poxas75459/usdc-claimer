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
    "VWXoRekqjuK5vq7wypS3jFu5XSbpRANquFxGxVKBYVV73arQ8jzJHrLUhfVDU87HMqdHDiM1N8TCR3gpgmcCb1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2DcWwd1Uwk6EjeCBiZPGUwn99eCxnxy6H2452L7iEf643nM1dgSVxQhrNfmm9Yt4ZdZz2GN6L28xBrkug5rr9",
  "key1": "3K4knGxxX62UfANrkJ9D2KPgKzXSJ8NvXDu3Rwk7dDcTW89VNYteGaJX14onoq1c4h3p2Ajt7mExewSXPd3R2FW5",
  "key2": "4kyhHZs1ZsxPTdbWQpNY8PKFjD49DfC79LChoMKc9qCv9ey2XiPnBpmPQSXNJHXgB7JEieBp975Ts5nuBUe3TyJG",
  "key3": "5aQ1c52imER3u7uwsbiHeWxWsr82VJ2oVP9wsDyjqkHmamX9sFCz9y8uMNXneddLbJPNjHUCb52Hun29EoL6bcK9",
  "key4": "5WodeBeMPpDVzCQ1haV4d8YcbqwhJqRjZAsV7TpfXSK9A4D6Vpczr7uTxbyks2i1k8SYVFAwr8hnbRyApgsWMSQL",
  "key5": "2actrfh8wffkjFXC3qZakjjAMZEtxpt9YEJvwGRZpeM4T57vpbYEzhDbzbAtkzNnDZ3FhfEusiS5P4dufrW9CMkF",
  "key6": "3BRFZUojXACNpEVYbZJky8HRwrEU14pxEjnDYmPxJ7Mni5mfUkU89EVyiikXpG2tZVigyPkAUuvxaR1uwS2dG5Nn",
  "key7": "2MpQ81WpaDNDo4HSZVrdKfJra74qDUZVuRuKa78jeZqSM1AkAD3xfJUwaDZ3RpNpFXFEp4g5s37RiAeBUeFyPMrs",
  "key8": "58gocbqMKHo88XhM9YXLHfzsCrt5WdcSpJShXeiJzVAG61JZQ2PK7riaewD5qkujRyfYRPjFmEitMbqkwR9bgTSv",
  "key9": "2HbpYjZoUgufSfywHGgxJxGP5Sif1EGAsNB6iMYiHqJvtHoGj5nCD54cgWdtf7tns9kapkou4ptaJ4yanCCtV3Mi",
  "key10": "MBWWwkHu24BFarhsJHpJcBePb9HsVAYfukwJwebhySKQpdLvEhVAp2wjuxpMKGdRw2eSs6ncaMH71swXQf1z7J8",
  "key11": "32j4ngVTBgJvjgFYf7QK6nF8ngsskXn1SNtyFpW2XWqbKi7CNjdpqmVonP8YNTkh5k4dS5uJF3UvP8YdbK6nN5Vx",
  "key12": "5B2F4RktjHSc2e7eUrbzkv1CmbMSH3B8bvcWJQN3B8QTzBH4xmeGHrLeBqEF1iNEtcoDjvzE5CjU9seeFwQeaEGK",
  "key13": "3EqqW3ETWb2inHomsPo7ezDRtkr4ZGRxoAyzY1KhmjJr3Dj41q2VJ5pg8JKhTxSGEu3FsyPhWBVaAPkKMYDFRE3b",
  "key14": "3bT2QgqznxNcPaBwgr4hLygVFppoGEUNUiPcNXHE8aTR8m2hoy6X5EQYzpNTCobThdj7tmqR3u2BNEa8nye2ebxW",
  "key15": "24qhx5o2jTqWKJSNRgYmGFaZe2SYXQnCagpQrYHKrM2FLYtZDZ7oZDdqF3Fg4tbrgpAfZ9BRvtQBbszNWxdTM2xU",
  "key16": "22jTz59fdv2SKHymVVDPDhj6AViuxW2qP2WomrLNc5KoVyr6zptEHHUwwArFDfRVWTEUh9PVMbB33NhkGrm7sxMm",
  "key17": "5yzg3QPtPGpNiNssn5mRaAgrkjFAHxfo9wBQjwxgAKVhbeFC1eFfypuKPJsuEBFep5PCmXzeSSqmLZ6zJzs9qEEk",
  "key18": "3TFxz7p8aUoMqyQP4G2PFXTEhMXSsoTCa64FBbRn8nCBUoP1VZWzLf7kzLndZKFoa4UctZ6wuWd7psU2m3aE193Y",
  "key19": "h8kbsndPG9MgC3bHA8Vs7D1r2hmnbVKNJVkjbvGuUvhdiiWB5b2UiYmQJJWYahwwi3PPAgmKEcEk3hLGPHgLKhn",
  "key20": "42UTKhYUExQrCULmyJLVDQGJGEwcgLBAzs3CUAMCdAhEEv7DC3p3SmHpoGZMPRirCJZGG9PxHmRy7h1Xe5xRiw9u",
  "key21": "5E5DB22mewFzvND76fFbWqYEzWVdG24MT3i8zkkWZ1PusFGnLiGjHf5cnc6CTvUm61uPUqvuekxHVVmPFsNAHnCz",
  "key22": "4LPBpyiS3F9Yocr917PvshSxB5DgzsQZPeZ18Hsvxt7Yw1dYrXtDMNjTbn9VpLYBtxRaG1nCMGGREMZAN1bSTiZD",
  "key23": "2vHbzz7i9TbfLJaq4sFQC4rLL5LVMaCkN1LhBiuB5mQtu3oNvhMcyRL2ncnVbj9ACGyws25QW5yu34CHt6baiMXP",
  "key24": "5dSqVBL5aEzr4KT8HTCMhre39swd3EfndUPVJychFoN6s15wP5ZfAZ7PXARPdumj7MLemUvXEhu94XpP5e8CEz3z",
  "key25": "i5nVjibXoHcjDT1HDtia9vhWDoyTGoaBvGj3o4hPKybjxxiGEq15sZcHwpDJNrqSCtWQLpet4YQ1d6aZX4VWXLq"
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
