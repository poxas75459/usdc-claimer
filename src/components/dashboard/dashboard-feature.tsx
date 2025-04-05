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
    "2jooKe32qkoFnfmuskNRDmVraNB8MwsRhWD5p7vRjXPdaXntXqD8jXvFsgbpLNNFiJPzw4awuSBXEbyihTadie5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9NoNK57uvKadaMq3cmuDNdLDTvWh26mFH2dL9LwnVW3amu13Gw6CAtcHvmSoLEhKpmR9CxUdS3L25kTo3QioWR",
  "key1": "5svcfG3G4fgkxfx4Vb84MihMDwVt1j3JSheRH7HLrTP6NWtd6uheEaPu36C6b7EkQA1935gsURmSnCwZvyQXLV38",
  "key2": "5sDHsKzmXxP4f6EAkggqbVS2XWTa1G9fpmNQkMz8ZQkTbtzz3Nibu1AXww2jENnEPUHxMk6pRg3NiUsHAURQv43Q",
  "key3": "4eCabTPiDjbQ69im9H3vo1egLurVCh4khnmUHHGBbMzShEvPQHhp7Hb9xdnHx6RDp2rHviUHz7i8pcDqDWiYLFoG",
  "key4": "3YjinhE16YvraMMVWJUk9vnSBABnNnfDq21Ga7LmshKsKuBpyJTgbz917CwknfoBP42Zz3GDQEvqifFeJPpLBxGu",
  "key5": "2LLiQGnQDqkmZm9qfFEZMzJ4XMdeCFT26GmgByyLtnmbzbsxeeuCRXL8WtXVCoZaZqWUV1G9V5uapW69hfaQDTZt",
  "key6": "3hanpr5ftAJpon6UuoAxMKGUSddNVshEMVUJrTfs4T5tChqASygwch8MTcJswBLrDDQPeagLBgmcExyASzBqx5Sb",
  "key7": "5jSHdMqMCNzBbjkAXpGUV4wFxYBvYU5fdzeyRMHZw1GW4xTw6gMps8HGFjdy5aPHBpPRJhLBrSrVN8Ja5zsDbzyt",
  "key8": "5Y9oZAaFiWABcDVs2KGtcxSWA7NMUmP6dWoeoiS8NaerT38ykUmg79J84ToLwmjSFAbeCCeVD2JLDPuntyiexvwp",
  "key9": "38GX1CwtUiqL3CR6TENP7KHnHgBCyAGvRARWuggLVpEa6vCy5N4K7dZw15rMDgGEfyn5xAgmdFATWxomqNoqY9cb",
  "key10": "4yuVZRvkj2VVNCdz4sjPy8fdCrL6La1dXX4ePLEKhtCQdHeNpLEdbxn3RLBp1FdZDbAWLmF8L9k9PbpSjjKfdgf2",
  "key11": "QFZkmGVHaZXmXc3Youi8htWwzZ4GsCVVJJuqB6zKzDyTuYPFNfxQUuLsUM9bpGDnGZRKp6Bp4WAz79obJD8F1Rd",
  "key12": "5zH3sBCZ9CZCgHjkfi63QeczzcPs8stPgcoVFxzdcsZdjTYdAMhxbN3gqcNaH2FK4PCKa46uL4isWfCoJyDKqeE3",
  "key13": "38xNv9GgBB6xPjJa5bky8GUpE3pkGTQettAhqPJmGrrMfkN4on2smaNQyHYLfymXDzJYMn4btreBZYV2ygP5t1Ly",
  "key14": "2xbHaAob5k82Ppr3m4hetZRzExZeEJHPEdajk5c9J6hK6jAuxraQG3khwwQRY8PW8CHE3xXF7PNFw6qiBfgqN8By",
  "key15": "q1dGdMQqLdgbNqYkVRd84Lj4vXLZNPwVFU5Zbst8iayJo2npaChpzJc6q1hKUNNMKjyYg1XE52ki9pwKPu21gFc",
  "key16": "435rRoswDRkQzPYCJykBZdkYRvLcEH8eQGm6FQrBpGX7gXxhrpESSugShFtWeYuZ7ejoVPspvqHi4WYDTvJyZnct",
  "key17": "UxDdJTxmhi6Vd3nhWntC28jwsGBB4CkhCpCqvpMMv8f9AJSrQafhsnHnowYDYVjrJBCAEf1SDrpuKMyumDFcSvr",
  "key18": "4XCF7Z5G3jm2KEHiznye37t8dCbSzYeUiXq3thQ3txbDztq5PC1VCWNWFu3doVQ6A7MrNFv4pufEJ4faYNe4hYzT",
  "key19": "2erE7bcRL3KjS1wB5VB4YD7SSQrYjiNe8pFYnuQi5MzGLqXDpduHCQYaymntasZ1GU9pLXHy2c2k9bGR23dcAVrJ",
  "key20": "2buJ2EgS9Y5C1LeqVZFKnp5teF6x4XaiHE7xASLAhZ8GBfgAJ8X2EFPbboKrW2kAqTD1ACZRN1QanZPb4prmBLDn",
  "key21": "3MkXEFJ5TRn6fdJncLycGUhGmq6rRLuWX6dHP27VP8k2k9qWqqBxLesPNi8D3ijWhXj8oyVdQhpTdG9D2nbKn7aS",
  "key22": "296rbXWQMpjAbzzyLcmucsoY8LPcyCBAiejYrNSYFsSzH7Drg7XgS2fhWsJMrXhp3z5aXmb7qVroBrKixox2sFxb",
  "key23": "53amKsE9jQkHdH2PCxGzmtbTSJ65gZFsujKu3Y9LswUQwECKRGN5WHYvfKf67TLGMejWR1aqXzAiE8RL2E1e9ehS",
  "key24": "65NU5aq1ZsnwMqgTxLHNF51HcgQ3UXYJDHWpkYFQrCHdH1CYyQh3Ma3vF5oNyp5CxGY2wjwR8i6RnZQyC8zuWBoH",
  "key25": "3dfKDonp4V3wkqoDDpneRM3ew61Bf9SfwY6uybYMuWeaXA4oLS9XP3MieMoL4qZ3LtPWobDQgR6NevvYp8yyWZsq",
  "key26": "3Ep2hRDvU8oGjExceA3JSdFsw219ZpHTwGMDWVq4yNTuQ9xxZwCvX1DUrS8z3kUWrUsFxRtbhToaYhCrv8S1PsDB",
  "key27": "2yuvZYedhjqyE387XDkYHw7nudKbQ3heeYtNdPWb1fSkWDDteZVMjs6HChk6SgHMdgUnJwKjkn36tQiLRJqfiCPu",
  "key28": "3BT4vKz26D6aKLFdA7soYW9iunhmAmW4mwgHz19dsADSfyZ2AZPStRSf91FEgm67rN1wDNKkmFdJFTUJDXJWyNk4",
  "key29": "4HNjLVkGqtASfbU1QZHaQ11uYDTwg4DYgp5ZPwxF6eHYFQsj85ZXJdhUD3MXzkmAzWvKz7tBCSiJ4GnfCHqtthRZ",
  "key30": "6LRYqok9gfUgVQmY2edDNjf8iFPK7z7hB9ooEVwvPoZmBSNSdPeeDQM962YkTTQnnqU7Txtd4pTu7btgWNK5ofi",
  "key31": "2Khos4u4odun4GRRomLxYH1XMZQ4kryEH1wKtM9xVaK6moYMGsyT9ESjgPQud9in1CjoMkfVYnLAaTDBohikg8gd",
  "key32": "2DaN7xMfyWj7Uus2ZLxcXoWnUinYQvA4HiYbg8LrXF9auZnezj6Zp3hHdTknQ7t7g8ZFsipCs8EWJv5uxsTgHE6c",
  "key33": "627hZXAHrxZJqtSfcEmduG7MtNvrKP2s67UHqaEvVDtbFJ9QJtbFauamQw6boQDwXoLVr8MKYnhRxdBLiuGMAagt"
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
