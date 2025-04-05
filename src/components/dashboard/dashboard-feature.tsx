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
    "4qi341PLB3EuLYTgXmAiiSQxMwsrymAY5qzGPEiZmyhPtqdBJ4TiEdrsPxHR246ujSPPU8kJAWfUoMVqnS5f7iKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54G9BLvF94AjQnWoAor3tnVRPRLCayEBEWMv28ZNQrHu9icVrkoYo3MSdGAHbHVV8HXfGaWiK8mLU2f17BGgJ7n6",
  "key1": "45DbK9ogwn2N8rrSXMyCo4dgHC9QcedFtsSnLPdtxHQJYE59RjYoG5uNRyHKC5YkYcD12hmLTLcWG4RFPatRk3eo",
  "key2": "35GXCtszXhqjzmNCgqTiTnuo45n1ac26Sb5ejvAjLaqogXwxFVFB5GP5UyGtqVjzooAVz3kJp8GgQ6vhw3ap9Kys",
  "key3": "3ke1fGyt7oRhWNVZYeaq9e88VfCDnYiaE4b315YnhiChaJPXdhfgF929xvEAiqsAKLi6Pnu6xu2j1mwBvAGPJLRk",
  "key4": "256zC9GUM74LdPpfv8CQdPGFccygsoL3yvdak8Nbbhjmbf6qdnA7FhhzNy6RYG9PCbFewfSbJRrmdyqidy6AMzGH",
  "key5": "3iFYxXCVC3Uh4KZMNEqvKkMNohcJA9j5o6sRtJTABmLG7dFFWepo8xvm3tDEVADiikxXCRNJUzND74WdhRqB9vbC",
  "key6": "5k3SFPVKW96bZQhhdVmEFwhEoj86GJQCCeUR8PpjRpMCcJk8sypEhQZqu2DPM6uTrpXh6XPUzLfqu3hFREJbWKQw",
  "key7": "2LzcFPjpgDBBkqFZVSQAJikRFCNrCnyDvwqQE9vCQ6h8QGrDU4FTH7psGXmRQg2beARg8y9wVKt5H29ixx3BsAJF",
  "key8": "2rb3E7atYVHsaLn1vojc4hD74EVbhayzktkHJ9idoCUQ22p65WU3k4YY8Wk19MyvSUttcyGALxJ3XQeEkydzpNQt",
  "key9": "4jgXWfNSuzEzg6msGBm2FRPe3xcnpu3LpkeLs2S1onpqoso5AAHpiVngsSp8asdHfpTMAEpLecoPwpKR2wiDqA7H",
  "key10": "3xfgzVocACaHtRrpdqx5YQesT41JJ9dbEush3ioEQKdYzPbjNTiH84Kn384Fx15QQrLdZbSMiy6Enz1ymSs3qeZP",
  "key11": "2qq8psDDvY6SWBMJEwYBBrVYVZ92EVuPqEkC2dRUycLamwhFkHBsY413ncAEZJf6Z5GopUF616Tvkg5zmJ8Us4rX",
  "key12": "3iHetQJkwM9xnfqMsNH8Q6SHBa1N6cjBBpomvFnLHpYn8LGhZrVZ8u1bXz4mGgdu2ZskbgJwDT9VpmsaASWyDzKq",
  "key13": "5bPia13YdKS2EE3PuaP3kaab4tBfsJ8PgbpVsRtY3vhfsN5XbD91F3eNZbZBrxKHnCQ87CVZztwHah6RQki2Z4vC",
  "key14": "3hypekpvx3tUSSfxEjmByiUR6rR3DikFpW9myGXRQv4faNzCzvQTDdWozJzm5Wtp7GxgFoiXYyWHbnw1GUxKjseb",
  "key15": "3JvvpVcwHvPsNfBPsiw5ffLJnwfaaLdcjHeA3ZBgLu9iDrJXc1ujycT6ZUzZ7XU6za8npNfZW4qVQK8PjP6BWbAN",
  "key16": "273CAmuv7zM2cjsCYWwYXzt94g5m1RvdSA6AHdD7xEUPHCLTTw9Deg7ECdEJ3xrfDZLu2DzTP4zZ389bBh3Ba2Eh",
  "key17": "4SWsbrSpUdGtNooCpUtkJxay7Av3VCJEwVRY2bNb81Bkqq6n9hCBXHuihnwes3Fv3bxukN863s2Jr59YxzVMPSWZ",
  "key18": "5m7VoKzKRQX3YKWcLDKZLUPyDt4CeFam3pSxvnGEhjsPo13axR2sxswcfRkKXYqXB1HZjuwhvGBzSpk9BNceKJP8",
  "key19": "3bxDhQcFxXKkeP2WE65zXuKwiX7mKLREBDk1zCq4iR69X2ScsKYZVMFsrqoV6WVxUr9NUHzRN2JahBSjCHNvGFYp",
  "key20": "wemx45u7KRrsM85522dTudrFgc4fiW1MPhrRdRYRqngT1g8WiumK5KQcCFx9K5kqGsadKqQSn2GAjvXosHs7e82",
  "key21": "54ZuEoSJdqoGBzdcmdBaa6RGHpnKyArXPQqRFNEtiX35MyT5ynpbnrLJcayjPm5WQYo1f6PducZ1BJz9nQHvRkPA",
  "key22": "6L4fpHjeuLXQTMYkVZS1P2P6G1wskH2T5m9M4ued7euyfy4nRroSaLTEyo63NQ7cFF2XEKSrtB9BPxcruqQgy1t",
  "key23": "TZBSaUof3okfFW8mSFytaX1pEvkKg889SiKtnV148hGEznuikTqQW51UhkqiS2eUwoZThS8fwr8a3SEeBFT2UYJ",
  "key24": "2z4Gxe4GjsAXYdpngVzBnnqgrpUQ2Mq1idBECLnwymnkzphs9VaEk1S2tvo2wh4MQU7VCijE2i1Cq8ZPDsquuUQ6",
  "key25": "2KyNEFxkCXaruhXz4x7k9ge2QBqSjBhR7He6soWFWuADSDeA1XWy2e4EthC7bHdhjQq5Rzig4Q6aTupqFi71PNhe",
  "key26": "2NeHjmdxjpm29d8wtmzbZ4scfZ5CsBwYczJALLM48jqQQEwm1WDNsM7vri7BwHTkf3fGGwgPev2qffQgPyxH3Jxz",
  "key27": "4EZexUigbJpshbo9xuo4m6dz75XHZbqaP6133qk7McnrENQJhyAs9Rd5NBJ9D5ufEsUtaqAyYFNUsxGmKxbXKqac"
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
