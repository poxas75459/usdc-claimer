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
    "5kBwVh6RVzmCapGDXsKJ21wBnQEMN6Fgpo5em4ugUoK5xKgntpFbQjNXofSAVJp4hAJL9f1jacu898pdt55SsYsX"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4yWSSwg4b1EdZTePc5bXdFAjV2weDNxfXJ93tC4pCLmfJDvFWQ6ku9hLfYfx9MuDkWaVwidbiLwaDCvC15jVdfVR",
  "decoyKey1": "615N8WfimbmFvC2dKcjyNVK3X7VZkv5qjjifqk2XsF6GDGs8P7wUXxn9F88qKewADKDZYL2yBvqPPjZRbhzAJe8M",
  "decoyKey2": "pCPGmszMP1zhRXrpcv1Ce31gat5AqY9KFH1tvpnG9k3aQw7odG3ZcLEG3gkqYLkBZTchsx8ULdJgxynPz7ozEom",
  "decoyKey3": "34Xqh7Sdfwn3bw35nTzNedxaCdBkbNULSbhwoyriVemjaxz4QumcpTUbiCmhC29rU38yhCDTHr4gFBQBbi4MCzhy",
  "decoyKey4": "5LUotgwpMRR9sKhdy9GAz4D8HXh8ay4Znu6D1AoKtHLPgpNqzgDMcudEm8HUtSNY1omW5VVRTXZXMVMjutU6ZjCn",
  "decoyKey5": "4oVhLjJ5Z4LynUK7zCjjBo7MTBBNw5CF1yryCX4EbZ2oQYtgVUyicjg4z7uLEGg5D8qVEZcti42kTDnhaaujgZAX",
  "decoyKey6": "XXozR9jkAQikXkigDVwxtJuuXhiZwXfSRmuu7hRFL4KZau1AwRezcX3aq2L4Jb9on3B1GmygDjjLScvpcKBygbh",
  "decoyKey7": "2oLKLweuKMV9kVG1GhvNmG7DEANZtihts7VYS7iMsoje2DMsqUZHshLhHDHURfX2Pptvi1Lb8W7egMbMriKGSH48",
  "decoyKey8": "63MTo1bizDmZ7DCjDq2tyGTvEakMPTqpLFru6wP2ART63RED3eJQkBi7TuaAutKzjsTUy2qvRMdXySmtfG6TYMRm",
  "decoyKey9": "5odoVUp7mY2EHkAavkTv4dMPEsQ3ArDyfBdRaiTjhFnxwdUaqBv7uJ6xPdMv2uqDJRZUhdk7D2a63QR9g9Zca9xh",
  "decoyKey10": "5i3HH8WymXYwfDatmA6J6oVVo6LbPySHYPUQUPmi6f7STKP6wbg5BRekKmPJgxXGFvLkQ1viwD1sh9K9Q2obCx48",
  "decoyKey11": "v9tNa1NMZh1LVh2yGoVBanY6CXeovuNKSRhAVYBLXVW4nDo4cKxShhuRkXynpSMkBaaE8xmtHf83dFuDAJVhqbv",
  "decoyKey12": "AGGC5GGjJfbKExrc9Nbohj2No7wqvPMMZB758stNL5hAKKoHQDrf76noCNzpyf7hxrGhejZJA94YyYx6BF89z4n",
  "decoyKey13": "5W3owbQJr6uRGNP4npmUavHKtJZCDD62FtrKxLabjd6wVxkVjwFQRmXtvpBsRhSUb8Ji1tZYq778a6mbTCqbexoU",
  "decoyKey14": "A4sGGvzGhHp5GHPxCALxV1fd3MrZJWhXNxWi2ibFuWgKcQyXhzfU26oyNCxjMUDKJqogD8gtYCS3QoGH7BhLCJQ",
  "decoyKey15": "5uiT4LC8yBuUik2phxBgQg2fzsngxiQnv8dPtibTgKd6W7ugcpTUkcc81D9ReJAC2iMrR4y49ehbuncQL5Pmdy5S",
  "decoyKey16": "2it9MyBNS72wcgBUEbo8HQpSn99yiePWQbwGonraPcqf8zFFWkxueNmL2j3dhcWvwWefAdQvGHfqCWpmWDYMcFot",
  "decoyKey17": "51dFUoVn4wsLNemU2ZSpFvJH2tvTBVd17QrppMPQBx1K5PkTFjfUZz1EMWgM3R6zifcBcmQpSFfKTsz1TjT2hgh7",
  "decoyKey18": "3nVyCnCkQDh4V4jdspTbcttWYEyTc7bSAzvfFe7a13M5icA3tZWKHrFurPRjKTbr9CyCe6g2dcJkuiFt5q92WtyJ",
  "decoyKey19": "3FaP2HWJhXqYaB3d5kgQ1cQVa8PExWQCe1QcMLXUA1Ce9iuYzcgc3bSKmbcABecMtofAYsPFkHQQGjmQ59qhkqCW",
  "decoyKey20": "fVves1S49Z3CZaJ2HLec4K2nDniXSrB7nAoGCWYtQqLRNikHuvbbMcz7oPxb1kFQozDZhRp2GTKWekUoowE4xgJ",
  "decoyKey21": "3hrFqaZrNG8hfoT4nnGzZVzsjqQ1mTM7aYY1NbWdm2HiGaEgsY98hZjwDj7NU59Gx1WmkfbP5Mvou7svKJG45DFZ",
  "decoyKey22": "3APBhFGkK3CyxHiH5D7BZNLUMWUCPFGZetXTJ6nEM3EMft2rrPD4fi2En2PBXVBP3Pfffd7cZQHBUgpMfzWxJFKF",
  "decoyKey23": "5D8suXoWMhe4SvmHHcpaK8VPaGZxF58WRzi35VYjVp36JRnrzJFpFrrS1iPyYdazgkSv5FmdsMhbWh7NcaMq5B8a",
  "decoyKey24": "3eJ4Y25PAsU2jgATtuz8vWRYJYtYSAW2DQhkbpuGbxEzrGMFukJmYXtorDyQoPQwJt9ATJvKqadmEDHcsVydESwX",
  "decoyKey25": "54SANmA8Loz72ij8fkLeK4XY591aMoJkH6yDRfjDJ8ZPLehDViALroNMrmkf4kpDKFRYKw8QVqjAZp7FBnAjKCG5",
  "decoyKey26": "4QEBTByjndNtvgncEepY5K4P6fW8sw3PATHvk4qAbRwFEkbr8bsNnS1ATGjijoF4Z56FsDN1GM47Xth7dNVmRdRJ",
  "decoyKey27": "4hWiL98veWoAes8HmvdkiiEA7r7LivZ5qs3YzpqZHCjb7cqGveF9Rexky5WJFKcwHQdyhTRonBLbYPwJ6ZvqzpXt",
  "decoyKey28": "3qC1AoP7tBP1TRnRx7vQwcvYwmn1jSF4zgXjjcUoH3TvpNfYysPm8qtfj7jr3RR2UgD3ZNJMSoQU3SgWCap24X89",
  "decoyKey29": "vC3noWD7QkYe515CSbUVZiUjBDzgkMAoY8aUxhcia8exapaVB8ewFiLQ6G4ms9G3znQTRcRSnSovtaqbXjmynKW",
  "decoyKey30": "4x9N2FxgZf8KRp4NjtrQFiS7AV8xLNwubuFFstKRenYnpxhR9AsfKbByHy9vtneKxmUTSrKwVJtEpjneJpTfa1Pq",
  "decoyKey31": "n8TvdcwsXsfToEPfzrQj5YsddktCM24Cxu321P8SikdP4rMsJWmd7jAfJvJyBLjW2AxD8uSkm8Y9ogKGR7h7p7k",
  "decoyKey32": "4paRpHmNTDLb6o1CrA1dYcMN1kmYzqS6EfY3yFjUb7DScZkNRULoTpuhAqUCYCuy1qoDDaC99DA9DuG9x3XdD267",
  "decoyKey33": "5uj4JLzxWiMi1V6ita3KB5D2hMsk8FPvfCXVJ3QZNwW4hKesqWNecYRj5kUFgwXSmauBzNm4qe5FNEVhSbHnVgJi",
  "decoyKey34": "57Sauv7AZcAJVumoFVNfc4yM9vqg1LCT5XRFe6k5hkHCwDpAcHB9ZknVuDgJE37rPejZXs2H9b6Vj32ZcGGQVmeG",
  "decoyKey35": "4jkg8MCH5PBDmg7KeY4kPMhEREYCHseixdXFg6DEi3Rxyt9MFdp5AVbC6vFkLQC9QVtBSWnt69MoybTjnanzZhTP",
  "decoyKey36": "5gPokVn9zWYG79n2864pjsxyrWsbq7Dpcs6ywwHXUcM2Qe19r6oUD6quqyURKojVRg8XcfMyfjFZs7C3SrW5iidc",
  "decoyKey37": "5t6wfGhYSK3XrY2RLvrjaH2NAM1qASn5TiUFZBi9q1PcxZrm5WhdFjE1brNWUJvRcpdtNZ7SuF5uxZkbcK9dVdxA",
  "decoyKey38": "4VmBukKKEiwA1CtHTBEXY6PiYevbKCengfhCXLboCyWeZCvnBgxHCM6L5uaaVrHTUtXAvA5xUAweNVxSWpwjYj6S",
  "decoyKey39": "33uPgiJ5DUoYfkC9h2X51hok5GWDQmT7dEtjBB6d22jj678igpX5VuSoZiXtUviKLptXMPBiSRMF5iBWCYA954FN",
  "decoyKey40": "2UFY2417XdhRDBhc1Ag8Mht33HhxtTBiYKJAnQQ6ptvc6WhsNCeT16QtC6E8hx8Qbpb4eK61ztMDFXevvCGwyM7W",
  "decoyKey41": "7A194iuvwD5fhFYUbPVSgzb9eUoLs3R3LfmTsz66KU2fXsrPbC4M3LCAvNnRg3eVHU3DeaFTUbRkHuUbibP89we",
  "decoyKey42": "kYzpa5EQpV5SMhqT61UnW8tiTd3maNmCPWnsz5y479sBy6JgNCsQdk4Q9ai7X99FZDrDfVppToSNHA7wW872q7P",
  "decoyKey43": "5qLdEkyJQDsuPJBbeZeYA5sbbRodx5KfDM7LwdH94LB2xuEmUGsuhnBj2SKwY4dDNVrotxarS8h1N18UriTKx496",
  "decoyKey44": "4wNPW6iVxYDgZdNL4yGcYmtvWtMcGNDjtJqEptpZft1A8jXxwh1fGdsoM3JKMJrNx4DP6ZfBhwbL2NbD5kSRdLUF",
  "decoyKey45": "4bHWpWDLY8ujXw3X1L2MDcHV3pxy4QfqhW2QBi2mLxc89wQ6BZBaSqit9Pz4oPA9EwJYNrWgV583G8x5PE4czVq5",
  "decoyKey46": "2zgc9EsySsVbgsWYWpfoVLY6CBU14AKE1zwoCe5TQ37aGpf3w8Nz9rmtjYwixEtb4dry5qyYmeqhKkop37b4osJn"
};
// DECOY_KEYS_END
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