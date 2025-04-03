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
    "4mw1qofRnJwtgyaAayRwU19s3ZErX8Nd5sKLjzQcQeoG7Nfnq4oVx9uSPdKREyoYTjbBpmur9ZeYobiNmCtM3kRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7EePwfWh75ZJqkQT1Tz4JYi8oWvotyJuicsSPS2RzqZgj9Py2BSN6DEDxYJeuwFJUgriN3XFHo5gfN1WRLZ17A",
  "key1": "4Aa7mTLjbQFf8M2uKN4Sc9hvwseE7ZgvEZ3tNvgnWDVXTZxqWPQQTkgNnrLVrA4ohGeRJNk3R274HMo7dRTqktyd",
  "key2": "3LppKraPKKe2HQThUeAohKkjymckMc9zcUACPMh4dwphjpasUttiyMMkTkGUp4VGjLtPmKuxJ1tu6gWiGHbXjbYr",
  "key3": "NfxG3fq7KeGbTQriimvpx8HcEmKzvdzfm2nx8jtN1uA8cJZgaJT28Qjcdi6scY3sGomjUvPatKCJCYim2NcWv8H",
  "key4": "eftipiGJfYnBeUbTPWtC3tCivdy7AToNdBHaLWrqsMu2gwxvStRjx4VPmXyboPWvstoteQcEpmbj2dh6pc5M3mq",
  "key5": "2jgLn6qZYe3jPyRcqHeZCVQcmQeoUm8z5vvRw5rAZDRavnpT2mXg2mH9o75dcxVZExFvvbsKXbhAu9vYGAw7C2Tk",
  "key6": "4dVmMCBnsoujGoJ6nDQ4B11utHwFTWqXPB5yGGHCzgrbLTCegVgdH745U4dQPgMuhkdRySR7mHneuiEgHZezJaNy",
  "key7": "1ZBdqSpjA9H6pxR3t2DFy2bu2LgToM4UJTgLUJXqzjJjABFvpkLqtfoY47tfqDRPfK8o61aFavXgKAaS9EHvU1U",
  "key8": "3vuLWZ9sSPJDre2PSDQxDeRX2MfU8SudZ3zQM4i1GiYJiv4v3BCrJBcp1nQ4oQjSxX8V5ZEBYwf81CWTPDATHuyk",
  "key9": "Wmog9YJzdpkUYNKZBYJXr2uEuHXYTCqzPziGPVcRs49mULgAESBzWw6zYvBCK4D8KhecYFzNjUKtCoKA4rA3Akn",
  "key10": "2tTjLnKHL1foW7dBUofvDCh8DTsuxixqxht6fGSiFJn13gDCMSvyx5juY26Li9aBwMo6tC2uHodd5iTU7mYMt1Th",
  "key11": "3JzsiiYsctVUtqSEyhTDzRKNayvp8BBvjYTxojb2k51mVuVEDw1aYUJJySvZoFEdJ9SxbNjMFMXDeFz7jS8KpjcT",
  "key12": "5cEeJbe9oGF5UKaRrqn6MGVsrB73aDf7Efnxn24kZCvGbumUA5Nx2M6aWQivCFqf55Ao7sEv5y5gMRhCNaoxEG3y",
  "key13": "3MkubbiNLvDv1o75LhmHFbYqRPyRhdQZkFdV7UgdxjLse1uwZAKqFAarqgUVi5z7MURBBh87XrjcMqp6xJudrRjH",
  "key14": "56GwLzQLEy9cseUrYdGjRJgevpjLv1q6ozL7wTh58zBZxHYaF3dwhiHLpj1FXUFMspUirRfz9a4YJVpBRYoE4W3B",
  "key15": "5NhEi1bbqANnoDHJU3BhNrfaMLHpwnRhAuR3uKZJcGecPkiogCNkQ3BBahvxH64aLQfm2GpLjC4dHAhpSRaNi8Wc",
  "key16": "4fqzn7BetkV6PbbhKUAqtk6eu5UV6tByf2u3aDZdPPguyKLBVLoxv4YeCTW2ePELsJpPFCDvDy5vb43CMBB7GvdA",
  "key17": "3v4fCPvUCJ1VSSZnqLMf3J93tJJH23rU2hi64Dr4LgnkuecHYJQSgwEkDPJ9QYma5Af1JFBMSYEi97cGP4jPE3yT",
  "key18": "3jzWXHnJDCMHNfrhFJxxXVgeE2Tyv9HAsa198aZjzgTiJG2gygqWghZYSgJHJBVAdabS6fDNxLADb3YgvW8ctoEL",
  "key19": "3i9CcEL31LhNHggRNrZwtfkr84gTcUt19eYhicPDuMCsHGjYrmyvCeVMAXqmKGyu4Nmhc4H2uCoxeFU5uDMZEmeN",
  "key20": "h66aarePLYimKnkXzRZS1VJDCfFmykznQVkeorx97ZDZmyLP9XWXpPfkbspbzNXHVfGVvussNCRofMe6fwWiG36",
  "key21": "5Psw6b8NrJcRcJKRJJ5dNiR2eUvsyCSBdhJu1rZaSJNBTWkPaVuriaACgJUwuByS2P1H6dweRZVcHae1fmfUiLwU",
  "key22": "4d7W3WQ4NW4pFYaJEzY3kkgWD8K8oca7TVPoK6rUc6NLh26d1Q8Daf9CtNHBwXfiPSGf12jYsFntrVvRELcaebXj",
  "key23": "tjj4WQQWJjtxXf4GkeWKqHjMqgMkqdq8oyL6PrynUAmTqQV8qt48YVVvQMXvCqQzT2siakwo2NPUGx94zcnWqZA",
  "key24": "4kypC2f6SE5JMmZ2X9Gex8ETUSajmAXSjEzozy7qTbGbBKPBNY7oiDj7AfHGpyFwoURPpVPES4i6jXwZZwTvDBDA"
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
