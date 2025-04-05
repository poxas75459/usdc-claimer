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
    "3ZRH9b9m5YT8PQyMkMHZf15yAz5P2RAajxZ9QEV69hUSA6XnyQeWBo33HWSByJRtdUwQxgdPSymVpFQzXWB1n6ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iFeZkNjYJmXeJ7g7eZ8bRKw5u3QdAUcGWwoPsaPe8ksqsQsbW1f725vsM2iB9QTrLRT9fFmnzuJwa1FuTkahcpV",
  "key1": "5GoeTwj4UD3ZyjQb6gEpzq1pbHKU6E6eiKqpK6opE5d39C598GuTSewQxRpTLCWjB2nXczoGZ684fEQrYNhQpqPk",
  "key2": "3FxKumYA8P6LmvCJuV4aXxvJK25R1QB8ZwxnN2SSBmeZQsxPcuHQhgrFYzT75BvrKxhkJsqYtpfKJQARS33UXpnn",
  "key3": "554NSCJPDLP76xhSyWaxLL8dinFbz8EAuRszzSojr1pM73PdtYuRA4StC2HcZXa97BSQsCnSpL29YkEd9FeYZP3E",
  "key4": "5UN5xnFwS7n4wfzGNEhHSkEcgVVBKPrYTmtjUoKZ55A24pNj3E472DEpsg69haTdbDkx5uKF2bhGd6YhKwQvmyCe",
  "key5": "2SYmLVCU7C6nuGko2xb2EJzw9XH19VFeTdyf4nvhBzx2tiTPJSDp2k3zAFCQt1sUKdiMno7HKqkRjgsDN6ZyUbAA",
  "key6": "7obU8PXc16tGG5CzqgKkLN5PaAukz59bhwGrLC1me4XeHEM9Fa8RbdeEbwMxReg2PQJef3iEjDRgz4snHGRjEzV",
  "key7": "2BbiHdi2bsibhzc745Ufkd2MospBMwrzjQpns5yEi2zkqBV6KHSuVoV3Fa2SCx6KgxVsAb781wnYLkm6usbPY8Fm",
  "key8": "UXtL31d3orv2tT4TQAeVxFEWe7TBF4QVhwuyKjfsh82LKVpo36jWypJhfNmK9m3oML9GTCCa33R9ekA9cGb39tp",
  "key9": "3BJKbEs3qeDfYsfy7J9JzJq4pn3iVpZZA4oYB8zRTvwJ4mTGf6KnDM3JMfgarrntMKDgTN2JtzYbZzuV3MeccbC",
  "key10": "5JEJV8H3ctkp6hSp2vU4azjRz7kDwdYWfEoxpVduQpSuGboPTdKsvi2wesGJYboVJykUJeZPnd7VVMDsTp85mHmS",
  "key11": "5P81tXEo47JMeDMUiUua6iBr51uVpJexzkqiVsW7igea4pK7jtPtLypVD6Kn6UTYeFcKwa5VSe41TAfv2fYwv3EU",
  "key12": "sQGWLErUDSHm2aXGsQwXAid6Je9h8BJi3f1KVsQ5bvHq6q6obNgJoGroVBwy5yi3Epqa7AqGX8iMV97ZYcPXQNB",
  "key13": "4A2tSQPvy1rDG7nggaxvocpU3tkXdkHs5UNj8nEUdfvBkpPV5Yo4dtVihfU6FZ9368563fdQTojKjeoEy4jjPTQG",
  "key14": "4zQYFvzojwQbfgmA13NGGKW11ar9PiipPxk8z9hqNUyDHDUadHd24xtgVknFFMPFr8jXrz761pPcjvQYPAbh3CrE",
  "key15": "4ghWxtsu2Wam49cF3tYKTWGdiNb8Uz7SjvrTNE3YBc4b8q7ETdL5nasQkDYVLCEMSXqs2tUkjgfCt5hUP471SEAf",
  "key16": "2dGnpJ6A5R7TMi2ZbYkqPX7EvM61SNe32CtXuCE44y12Es8gzzQyftRCvCiFXmtpqJCRtUu45YxYYYGHHMtNdUTR",
  "key17": "s2j8eUMh1By8wSBMAiMX3uwyfdXU4B4t7q8FeHoeRUpP4yKyoDSNEQ8sZammGNf6hbHYCG9iz4TNnb3TcFVAhdc",
  "key18": "3Xjea6kzR6pwR5kj5AhcYR5Q1Ho7CtCbwDeFWXcouG3dKf6rER7w6Vk4h8qz3JisTtPP1BK4jvXXmFUyF62ayBSk",
  "key19": "5QWTkDjrPvsAMkHnvz9GEkAWweS1oRvsGnNBS5YHZQ1szLurtZUYJD3WiDan9Fg2ZRMop4sHDWEju8CRdLfkXkEj",
  "key20": "2BicJb2xn9RQPNjp5SUybyXhZUFPAwezcRa94RZ3NEYrrtauCay4aDZYxLwJBRmSZnLw9K5XCRfTTdjotmta3gmu",
  "key21": "25oJ2m5SMWgHxvnmrfqK3mnzCqWMMmpBGJ4x8oX1kviHsd61zB7tpwLKGDqu8CHG2ZTbpAGMiyKApgjP9MDqLnb2",
  "key22": "3pVZyZXqSYcF9X2QmdBHEKaC8RdyEKPBxGEUMU4FJRyPFWVS33kzHkedWDhWXEQSXb1kWAGQmc17ViRp23MNwa9o",
  "key23": "cRgQU2BxSkXUyUCPszwehxfrgDz8H3sN8MbTh2shSmQdMMLjrsuDPCzV92BscSpxcNUXi29dCYbrggBwF3z7jKS",
  "key24": "hqzLtj33NwQFfnHd9qKtX72UtahPeJg3gaXbnHEjqC8Lm7riA1Zdr8rDAy1qWrmbhdvvF4j232jnJ2ydyfU4E44",
  "key25": "2yNNuUvq1jr2TfWtJEWSkGgq8bdTUrXCE4PFZ6LEfJ1tHtPwqaJWxaGmDskJCWFhb54Rh3mZhmpTvdSNbkxKRqgU",
  "key26": "2kBKxiTrpAumZuYfMjxvCZRWJyD7CL6AeduQr7FK2UcEEUtC5jjtBgJHPrTVcDn2w2pgGnAK6xBUGubi8qkuLYMw",
  "key27": "43uWxSjMsUZXHJFJy7DbsM7onTA4wkvJD8Evfw1ubhDYFTPEyXGnxkJCiYJFe3QagxJPMtAfmG4zS3g75NCtL14s",
  "key28": "3m2JpizXhEPrWU9qUi4W7eCNMEG3X8TY9Vozjf9w5RsJwdZYAomSSgbe6Gy4VyG2nBotF5mwuBb42KJqKSsbLZT7",
  "key29": "2uhQTkpjV8Unn4uXeFX6EHFNcwK7jqejNdp9x7ppaYK14XKhZPQyTnqAqQmrpLEW3odDwantLre2wiQbQzwDpckw",
  "key30": "3Zjkxjo9dAeaEH7LdV5kGaMjQGqjo28gmMmAT7bUm4KCebx6QhCN22tQHPhXs6Vy27T5EubJLAycKWi7gTDYqM9c",
  "key31": "tv2UaXaFux9RH5KzysJkrNSC6cw88KV1YFt1pRm8yXMGLgQAEiNpS9ipVvftx2yCKuqQE47hd61BAxvA4wd1Tzw",
  "key32": "5zTGmCW6NBuDJWcqXC1n6iFTLF5wkLJ2J1rjq98dS2VTrrhBFNwi6QWXceyeSbq4rAY8eNmUVaV2BzdVoMuHGDNE",
  "key33": "41tUtitN6wPomwmiRvNALXPgM8Sbca1PRxg2RPak6NGa3hCYxBoxGAWAvs1TLYubeYEVvvQLs21FTjZgp9JqVTED"
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
