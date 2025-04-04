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
    "5ZZ6KQEXUPKTbNG2bQMjEco8E3KK2FkZWcY2v4VjFjL3RG2xukkzwyShUGr2NkmdLNjdPLYiyHrBU3KCxnHgrhLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwDpTUsiRTZ8oS1D6sKn7nPW2waVuB8MvfoZXpgLZkaPLrBHbN6EYzBqKfKs7zPbn38wnBS9yxhnArpJtupockK",
  "key1": "5ZAnRwZDwEwpjNhmVBVHGJFrjX41xk67b66EreHasVx9xXfZt318eKMKmD1EqoSyBbu4VVUjPHD75AYeRrf7jLpy",
  "key2": "5X67SHpE6AgBsXETiwiCoHUxzfDA3AoLLD6E5xrsE5JvohgDXsVyWho5G5ZWhXQwgHG5mJkY4NgZNssKsv6c6hFC",
  "key3": "5hKpFZXQfmkMSB4DavZ8ELEvTekTgcJifKaUArho6FDzb7wM2zL7y5FttFLSW2DHjikayezgDbhbzvGkCDe5pQLf",
  "key4": "X9Fyqu7n9d9JukLuXdCqGHZQMJk3KLeFFfvEMEyPR3Kdoapxzfc8UjS1yCBAdtEW5XSJLJfDGYcWxEVJ2fsRfuC",
  "key5": "5fb57Tjk79QhPbhhs6Uw1wufAyCqToMxsqkmxzfJ1qguhFapwjvQx4M7X2iuJHmHLm91HySvAMotNCRaUQ87U9ia",
  "key6": "mE5nbsZ5Aznmus3qAfdp2shvSxavDjLeWzJWZSstm9RSrWtmAAmgmTXvTmQsfLWNpsqLVNJ8ntMjfu7FWUadGaX",
  "key7": "2N2sJL5ae7iiscL8yiSu1v3K1tdyYC4LDKTP1UgpD87AsSex7t87mctGpM2MEgefu7MeomXrJ9UDL9MHeMFiE6f6",
  "key8": "rpEm8krwbRe4m3pRhV55Q4E2sdsiv3Z9trJs9teYGYm9EyEkn2JWzEgSjpF9gg34CJei24bmYF5fYzpxepDc5zV",
  "key9": "3vVSytYKD4nktcgZMtZvrHgV7hW7M4nb3uEyhLZ13tApUPk2w8L4nBRHK6rTD4yh6MfHz6885FP3mvHR2Tc2P5aC",
  "key10": "3gK6BGSQfJBCYj9bYMCTucrUiJEvZWHT8LC9rLtviSh4JSFofZCviwWLHincnPz3TzraumDB5XfXaQabXh9EBfwo",
  "key11": "KruqA6piXzoozH2VqFo6ftctenTE4HBadMCDSxNBhcRcdqScqJW32duVJBfwTPGW7ZMVYdHJp9wdpbUvnyfHNYX",
  "key12": "2ijpgmjNkp1bWAwAdZD4WE73tzsEYPnCETcdRaYwetVwgpqEDMuraRfbLsWfNVoLzYSXYt9U8P16J9817Xkxr1sz",
  "key13": "4fkj4h1bh5BYZwXWspndRtcx9GURjWNMuNNHHbyPCtWV1NmK1KpdRVCushCVeGMNEgAkfBjNxKEbE4ZCPheMEnVe",
  "key14": "V3bampkA1fdr2bsF2a8MaZGhatSa2xcdoQMadY7xsVL4kKrHkmVdouueiXUViSzi4fvWdVW5nEotqa7vymtoskB",
  "key15": "2pMtSJUNGPxH3XwmtLcJ5cg4g1QPrFoFmJ4apeMyRHvrCRAnprbsZ1HrJXjzGguzdWePGjVkr8zuXAHxNP3Ld7L",
  "key16": "3XDNb5RwzSvn9zsjL76iY8vzVVUQqQ3W3ufwZN3wLFJzTWAVL9cg48vaaWfgs7qSs6jDq1Lcx6163PoT31nFNF58",
  "key17": "8E1gBFcnAQf6L7qa7U3vsujTS9AqNntAQfvqqatqcLhXA4rgWNVf8TLSyW6t1V8qPmhu2HkbENLDSQQ3o1wYKNp",
  "key18": "2G1Xj5wbeR28DHnS78RD3QezRSke4bCTsFyUiqG7Z1R3edLiv5risAaAdbZ1ychBYZeLAhe8LeBE3wk5EZWRjRxw",
  "key19": "46BK3Nx3eJomZm9q8bRDKoHgPaDH7oRnbsb91nbMnyjN6rjg8WHswqVyo6f2DJ3NnMBkqCaJ3qDhthyZvfkTjT2y",
  "key20": "4mSuz8U7RdtQQJfP29iCr58edRq2tpTo7G4snaqTgP4pypjg6mrCzLG44g5UdPxGvtXYSQMbZvE4UyqoiUkjXdmT",
  "key21": "2nCR8E2JYucWV92wY6Lw1nURrHfm6AwMpptRGki9PnmC6m4YExV6cr4yT8CPZaLg5cDXLU29R95uuw1ESwZomLKw",
  "key22": "3sPpEJRGX4AthdVC4Tfn841n5KrFp3XXLJ3ZpCF759LtTLy3ayfX2MzshnxAy3XxwGE9bTTiFYjZrUEWSjpv3QE8",
  "key23": "5Kg5BBDAvmRREzqbPZjaytKmNTyh9t9DeDfkUzChvzrP692Cav18KTmPJ5B7mNtfSRx5XiUba1bm876abjnpU7MF",
  "key24": "4NcH84i11BXofUyDCEh1rXHvMxUcu9KFvZqa34LTYKC7p6PEnv8voSn7w4znn3SjUjGm5n7PVBBW1A6hDFQD94Jp",
  "key25": "5kF7LAzP5isifLNK5F7eyUP6kw85Zt5Drt4gJeqPVT97zvfa7Yy2wLojheckFj3hp5FQmBC2xGN3veNbi3zEiEL7",
  "key26": "2nC4CBJvRMi1XyywNLB1mUFcq89s7KeP2RAyFTo9rG6rE281KvGEeVDSqJk3q5y9CJvRgEHiGyNm4HnzFQE2VmQB"
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
