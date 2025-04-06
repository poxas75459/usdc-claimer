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
    "4Q9bCuAKD75Pg2KFAXGaQ6KsQJpZ3BNTEVfkCXYF2AwiRDcKcJzqx8GGszcdWP27rjivJwfq1ULY2JkV4rtxKQG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbeRLCPpeD3cTYaHs3n8Mi1RwXYdauURn4cndzMDNbCDsytnakq73dUErpTJm7tCKQe1iPWkZLiECFuGAxb86QA",
  "key1": "24HNecpn8XxCv33ZyXqZzVHJ9HBNFgYB172qSqKPo1eWCrqmrQYvC7PMksoUgHzWqXoinGyv4c88UdC5VKXongSG",
  "key2": "5Msbjh63HsCpdWwH2oY5BkFbm1WbBquz8gChcgkW2TmccbbKCPaa6EhTNpqwrsMo5ZSRgoktmDkwnKfhb6uYG3AE",
  "key3": "4HL3Cnkp9BgEkijDSSqoteW7ZQ2CtT9j5ky5VSCisAPQhdjae1HjwWrvJyKBf4rB2BeNLzkpFoUGG1x5ut9jC2qr",
  "key4": "4koJxAQJgB8Ugz8eGSkYdazrhAnSWyoGhdFrBcssdbCMpQPZb5j62CSRTJtWh1MZdyrR55D2h69YFzk1S8iQow6P",
  "key5": "25htFDPnDATmnVFYeJmWe5vedjmH42et7JYTCVUoMJ8qBLxm4Q5tVyCRkELUWPpF8DQXXR5RtWaoHLbdVfRcjXvw",
  "key6": "4LbMFCGhJctdkyqbfNHbtTRbikW7s457hsptE2wP2JqGchVmjrkKCTYURW62PHJuSAPptNxBuVoQ5u8dkrMbnNEa",
  "key7": "4cHRHqfdor75hyZb2KU5qLvdPWXBwvz1L8MVmV2JTFVK4BnbNwgNSJzTr9AE9K5djhRqRGVpHbUDgZtg6RjpfVfc",
  "key8": "2BEg5dEd11C4YGDg13nCAVhpPFWrjQLj6yTde5ZuxBoquXjniCsJ8JeJL92uVBwBDToXn4m3kH9GMpREUATejvy7",
  "key9": "EG2jVpSVgAXijVqCXRoDhw7xK5EQamGFM4iMRorpi7yK6UfkfECe9VgToWCfBtoBw1evLXg2XHntJvneFKhi4Vi",
  "key10": "2WSJJ4vpMsM6DLWUm1JJER2hoCgwx1vDa4QG3sB9zSmmS6cJePcDpgE7C64YUtowSKuKUG9Aro6henU1fZy9f414",
  "key11": "2qZ9oqcXMfvYBS3PFaaH7Xxomg7E2N98LSzJS9p2mStC1R3KeR6B9QqJh3BSRpF8d2UzUswSjn1xv8ETkWJGsDYa",
  "key12": "42TYaaQgvCNfZzAUeWkyKoerHBuSnvbmgPchcfxnbBE1L8NDJuYCdcKoAa5QKpiS5eeyccQpSJXQ4sS6DvWNTeXm",
  "key13": "3PzLtYZymJ49Nq1pK8DKJcxLmXZMbzNH4NdAV4BXsi7mr5C98QrCXnLH2HkxVsjrxb4h2xG3nktF8stFzTDR9zSo",
  "key14": "4GCVUt6vFCa6KrRx4UNRhhtjt5EH7THxvzLAPuRFUazNS4ihqxcP6qD4vyRkm1ZC9JDTLhWrsHmVvaFkT7VpZhFz",
  "key15": "JnP4JWC3cdNkGZjmvcjdTZovppnvQpB2QXGjdSDXrdykqyymM2Sj5KJDtAT48aWbEsoNBGzb8aEALcStfvrBxwF",
  "key16": "5ScGv5Nwn81gegn8wWfwpDRMxBBap3oNGGSFMdQkQ45ZZixTvEJSAnKuc5xaGfvdAjdk5hDezg5GogpcfTUYFwQm",
  "key17": "2fCD6Fo4jN3Pxq2oBMyDoKVYXZnpPuZsvwTjSwJGVBLr3EiMdffwe3teyg3RpovkxaGo6is58h6AXkm4bgaEM6tL",
  "key18": "4rmxuP7mcRQyoURg8PhhBcxKZqwMgtVaQqGQqNqLcBHxxHzYrVEYAuUNKrdT2Mdzh8XqSAVkW6ouunYEZCZJ39NN",
  "key19": "2CH4eCv3wZ8Fcxovf2NvXxaYUZs3C69SP6f2Yjtk5L1npR1Y9HqkNfZ89Z1kn1xeyFzTXSx17ELCyKMjc6FQVHUr",
  "key20": "5MG5VmWcX2P4yc74PsqUkDDZqoT81SLXNmENPb3Hk4VmgaBUgyuycZzkikSx9T8QsWVjc5QUrKoc2WdiwyRpYwnc",
  "key21": "4Sn7Up2xRebwZfT52n6JGxjF3mw8CZ3TECFZtUXu1bvnrqd1AsSNYdts1W8Hsftqr5hiL5jUqejv5J93mBNxmNqH",
  "key22": "2WWvTShdC9DY6ZMugWicVWCSqiD4zLqGoEnaeLxJhEfB54khH5BksSDJnsBZcMdbynHDmEUurWGGNJPmAjTdoQA1",
  "key23": "5daS4XEC1VzAfbhxFcVgP7kLmiPfTBsWE3JxF8GGrJBTB6k6fibR1GHPy9Z7wyvrwsodm2fcjhuBZTY7SmmkN6uq",
  "key24": "4iDsXjD3hsEJHqoewVi3rBDfPjD8cp9ZNUBnzR4VuoWRtuALiCY5Cz928wzkv66MpsxVuYwU8hgDGawzE18HE7hB",
  "key25": "5p4fqNW9Juk2rFPTHx5xVZ2j7G1vnhVnXbGwh4ExWDzANh8LdEYCznduj81p813vPBBjaY1Fz4m5qnZGkBSCQv5p"
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
