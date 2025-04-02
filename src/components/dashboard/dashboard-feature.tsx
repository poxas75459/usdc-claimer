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
    "YjQWCH4VoqSemZyhiR6LHub64vNgtoyWHHDx564foJYvUPQ6SCJWUNd3bqzdyyB8QAEtt2F5NQb4sLZmz7z842s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdZ3ivoYGDLH1R7y5PtHG5hhVReJTGTj3SFmvLrCKYChg3K1HQhCWvUKCjz6yyyDoaDz11KCkTX8wc9R7z9oZXi",
  "key1": "5xLiW1joXSrQCkXzCT9DQnFRiCUAgDCPWLMDhtv5JhHKfYXcmiiPuwAUc6kEtrdzPFUdvGgcrRt5AYyftMTKB1Pk",
  "key2": "4uZPniJHiZCtUamHqq94mM8hiVQjswxRizLaTrGh6ToS9ULxP2A8twXNrQiPP74s2UFL5zeA3JGt3cqpQuTWxB84",
  "key3": "5Wn1PHqQqqDiEgfbwbPcnkYod1XBuChRt1SZrtW5NdUoRkLUMhuDYcfR488UHmbUeJtNBeNW9Sg412mS7Qu37DXm",
  "key4": "Uz8NQPrSgsJNeHp6zJCvWN7cvygMHVfLrVZrRAbfTjPG4tgvUs6v9JhjbNyxR9uZ1BjA2rFatpzgnLai9sy2wPL",
  "key5": "5LC8w7m1QbJsBoAjk1REpyZ5Rz9Cay54ppTgeqH7nzPaA8fQSa1CDLa8J76kwagkw38VqzXdRpLoCrNasgsPHatN",
  "key6": "3kfoMgVyjY8AkftxWBxmHkddH9gkupspb3SSUoNcW83mh9LxZjvijTMSoJurvw18n7y2V6oRFZiQDjnf2YpLRKb7",
  "key7": "3GqD6PbFf7CfLrUroYvHKTBi2pjw4aBJkceJoFE2t3ozQyvA2GKyPVWu7C3846b6qp9714qjj81i61cJKFE6U3Gj",
  "key8": "4ULVUV2XXwLFaA4CFwzk6ncYdHtdwhANMdyyyz6iFee7XsvzWCm4xqbMfhCeeCJvygJzMM7hcDgF7EwpscLu3kGb",
  "key9": "24oJxdoEkvxP7AvmMWmogrJYvuvkKA56GSLtLTnxXBcQ9rgV4CmFSYDFkh94cw22eLrRCMdNYGyTDniqks4LZYzp",
  "key10": "5aa6Wqxv7DFxN2aFixjxgW3GZEfgMPEBGxSswuT4E7Vjz2Gn7TsFJU63cecKgxBDF8nUp3rrsa8KK7enA1YbmCna",
  "key11": "57QY72SGRrSbd12UTR3KX9pePgHCb9vT3JPRY9m95zf6eCZbMo1Z25uHgeQuiR6eadXMUR7wBtTSggc6y55jDZf3",
  "key12": "5U3mPERdnzLWSYqi53Ri1VKrkLWH9kgZn9sTmJjb1vWdVP5QiR98arEqSNcYVzr5iq1rxngDkcTG6ysTXNT3XCFy",
  "key13": "4tKkzjUJrbVHpGXiLqLW716ESz9WDrh4hDfsCmFrPppXUENaDt9iLEh5jJx6fh5aqknMMeyckqM5kJ8quVdaTJuM",
  "key14": "5H8asshSKbnxx9intfEBKSPbXfthB4CpMSp4us4wASmvrKbr44Z2J6jryCZM22A6fDnj6xfSN3LkRJEpLbQGnTLr",
  "key15": "27nywvT5hQYfMNzQ2Y3pwtB366mZYpEwsBPbxmpSnBNAtGRy4vcQCVcDtpJzcRJ1KTh4XzVHpVG3JwrXEC1tDBBt",
  "key16": "5XrrhozCZ6wtj67KdF5hZjrRwmMWZezb4iiGfuRTQfDSc3MdA4Kz8mi3FFZLuwJ7sCkhvB4EPpqakHnrD68vhS4",
  "key17": "3boKmYXHzntvrJ5SKsdMUxK6Z2RdpQN39nvgeMn3dW8xQzazruna6m9y7r6RJrdgRdz3zYW8dVWr9vjgvFaxUkeb",
  "key18": "3G3CeccmxQkKwn3PENo8VpXKVu4GLXEQc2DktpwNvzDcshpTDnXT9ngHu9uhkd37573E58tzPjrg6Rr9jzurBftC",
  "key19": "KPadFBDw9MWW36ZYmsaFcbSbe13sC8fzvREa2xtC9ufaUhexwwob7EdDmMLs9vnU15jjEjajyxYjBbXwJR91KRv",
  "key20": "3UgHzLxTTYHKgmjA94ZjsdnqG6LXoKTUq8Q9SiQ1AvoLBxEPwrvP9TehPPERynBQcwhQotyWS8yqMLArx3gPHV9e",
  "key21": "5jHK7dfZzzUL3N4NibS2ab4bo9YRxNrfDdoPeizh7An8vEgDxzo6EXeKQJuW9Ac4JLkLEXmrTnrE4ty38TiNZ2SF",
  "key22": "2VUbLX9cWfM8Q1oLU9wyLoZhhLBn1mygUVS3GDt25AY9TH4JjnVgq1MxdUN8JGzogs7RsoY5zrZc7J5ZEDhqaZ1r",
  "key23": "25YodNzg34Ndii9z5KdN8u5DboSQgtdnyQV9qj2RCWqitf4b7KkQr2XorLcfjv2ccNyNtN9AiYrKJLWxgbPL7BZG",
  "key24": "4HXjEReofRCPAKfPTSd3DStdpSUTvX2AU6K2vGyTy2rChUS33eZ8HnqwgCoHNZSDX8tD3wM3Pt3aJoeSaXJC71R7",
  "key25": "4b3TM71CX4nLayuzH5j7awY1K9rgMVyqfFPwSk4XBrmqss6jQRLXMpxwDNojdo7qbUSiDXeEKtMYkRuzHnDoabDW",
  "key26": "5RvtVMRJn9aKbksXeqf36QmSyteqdegN9qBExSr8ULLMsfDz7cupPqsCnRZeLQaKsvpse6g7QZBRbFa9dYicKNv7",
  "key27": "NYncGbeSoM2dVgK4tAWXbimunQXFbHj9vntcQAnAM6wWYbUmM8McFgswzpWUK1wphDuTqMVJPowjUhcGWFqPAeA",
  "key28": "UKbkqiHczWeFVpzptQsMUQ7sRpV7fsChm3Hu53eboLVVSZaDoZ86k2uG5Tw1RuBHshY5K1Bp2NAqZ63SMZjycvX",
  "key29": "2GpKQ9zaumx1rvDZGbi626TFUZTJBuLFRn1qMeEZfttm6pHJyYYtZSYhDVH9G1LFH6Z86qN6dhzGw3pMLTBFpQjb",
  "key30": "3A5EjJMPXE9Ln75nUW7nQYYmUSaVDNwrsgaC8ENbJEnzNJvTbi5w6QHeVikEpkBs4DBjhDzbHXckAA5WvxqrLA2P",
  "key31": "4AQ56qQNokte4mgE6YeY8hAVkWKAadcknxF58dzscpzNw3p8YmzjBz5XbxAqCyDRRPkHCktgQ9beS3zNPwZdLGZN",
  "key32": "2EJWYu58oTuNCCagDtzG4P5mWACN5SC8pZXLiTjk8NHiL8LxQdREHXUx2hgT6d9rY4MdRps5xENSXeszZ3KTj99H",
  "key33": "47brdqyo6xWvzDVZwDSQUFavkrBRoupHcRitE6m2Amt9nyZMvALMhK7YqNXv45eWMk5p7txk8nez5BKeiLk3Atkf",
  "key34": "2NPram4K1phamgP85BBFSjBzwGdyccbJAtyBCPYpUepUi4zQtuRS4n3B3QaZqxDU1pHW515YzZfiiv4VQdAPzzG1",
  "key35": "3hFZBv2aE2JcTs9uUa957AvatBjjoqLb6D9gR6vYF8YVNFazxFeLuyquZixKmQiiQV7jkTvNQVZD1G1kAnA8ZH2q",
  "key36": "4umBk27JgtRMuwLH8mMhx3PexzdiHNzDBwfBWddu97W89bZK288hYb31diBmSVGMNCkxd17gHaL6zmeXUbXvgZWP"
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
