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
    "3gokg4CfBbansJmMz5r8b6ret9Kbc9rHwt6DvCGK3yvuLHkMHSzULumEiMpEAYzcT249GvMPKsSjLHBwtMDjLxW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgDZJLyhoXyeTfaCftGbdUBTVmGRVaGqiVqRuNuWyQscAbHMvgXNZEzohSPc9GgP8QTkTAYTUDW8xXK4sBjhzoG",
  "key1": "3T6G4qS1BUAHVNK1gxEWCuEkP3V4vpZ7PEyYCMgcvmzWARBkoM8m312wVW4VDhnQANWq741XwcUZnmSswqSJzsTt",
  "key2": "5pKvoiwzxqvXoYGKsD34YFMkYHC3CccbwJStDMudDA85AjrvYzeynepzekAucojeTu4ya2vzr8VPMNjMbFhWH3RZ",
  "key3": "5AdwjJhdVZia8hnXQTQcpa5KjScf8cea4wMa5dfgezVP38QsC3XucLbqAmrGiC9PSBzFyEhhjai3YEzbm2DkMapf",
  "key4": "4KRpJbLFTMDgBUSHpDzpSQDdrkhsFgAhMu7jpMauhuzEnDTB2T7dFWsGzpm7AUmvx8MsUh4PZzFyPF9fkM3tfRoW",
  "key5": "SHCaisF77DKbQWv7MZgrS8w9S9gYyey2K8YcchVcjuqtZE2Mkt6zHYAj2dyLEYG98sL2Criq4EMvQQhTtEFX7WK",
  "key6": "2WDeZPAyoN7LtFvKfsrDSCKf7KgKv4ST8SN4NPSs1mqAXBa763aduSBtHUJZevU2qfv4EwcnxXFWyaLYWzw4VUmL",
  "key7": "5McM27o3GhCEPPYU5BY5BXvz5aSdqurwP3bDZr3LqBsfmz9XspJmEWMKNDUYxaushjQdccW2kMh61wgRwXvs5Tet",
  "key8": "2TvchcpUmZtk4vRu2cZMJcnBe21NDQ9wTzB9eYdygoU4rNkacWJmGAJYyFaeG4HgLUgGxjLZLhYFqwdR1kS4sgGB",
  "key9": "47QU9ryX3GjVvdsT3e9B5FaEZdzS72w46oVYPRM66k2Sk8UaU2ErgUyATqhNeaEauGs3e65KvhNhUJ5Yp9fckniL",
  "key10": "1QTui5b3hYkrJLQpb4ueHT9A6N9e4qioNzMR3KHqkEzVgkyEer4NssRHTRctFZjhr5o3NTiLs7DLRJUb6mdGRXi",
  "key11": "44ASneeYmzgFXgDPGbRAGRGNVZudNig8EnBjFZ2r4ss8gkZZ8vUu6rw7uf1cm5JJAvgTthTDyQquD4MzZxafHqeG",
  "key12": "2Top7Ump6y1D2wgXG44BFMWBrjTyxAkiq9sbGV812iNX5MwVocMD3CJmCmruqJ18CgPrDwrsZMDWxYVyEgj63nK8",
  "key13": "fN8X9Tpgj9HXyBeKRgMFExgW4297qpZPsePQmhvAv92K8jYWqeTpWw2z3pvXBfzEZ1L5ZMrN18ZVvqWsJrZop3G",
  "key14": "2Y2d9nwfVGETsaRQn41WrqeVCNewLDcCW1HYMQAvw8ANMA6uEyeDmcyCochAg3xecs1xU9AU35sSiGrW8q5NYxam",
  "key15": "4P5dtQrJRMTbhVmpKSedfgpNGRfucMv5debqSBahn7PBsYpbdwDhvGy3UJgwZAsSHVRK9kqzykPKhcKX3Viuuwvp",
  "key16": "5qfCaHhu3uVUBZPymVweLJ4g21p9tcYGgTzw461Gf5PnobAGGBEomhA5LbifGPqqeKDWhVUgvND6P1JJDzw4nyDZ",
  "key17": "2FMHq2MyjBqvYSwpJumHRWFE3gPtxuSNxKa9E8un98Bjy5NSu4vorbpsmgShKaKKkZGVUfEgr4B1tStyHPbjXgP4",
  "key18": "552THv8QzibbgHvtmp4wqtxLrARKG2F4zUdDC8atFgfJDbawyAzHAzegy5k3VTtnTHgMdoXJJNretcfaZxZ62nJf",
  "key19": "64CYcPURTPFiWyXDmjvyaRCTmWddj9hvn8Ypx6L1WLTVhS3BAQ6WiPkSvCRX8Z55PVVPAreZKDfBPC8tEng4x5cG",
  "key20": "3VKfwB78H2DrURpEZp4hCYX5eNDR8Ef9ANvZoHqCv7Z7ibHMgK5jkmA6ZebZVByVF9rApd3EQCLJmS6uYxp3Evju",
  "key21": "2XZhSYWCbNZPf8eganALHMDACmuDpDGknQWDZoG66P1nhviu6xgJNK41biWmXESmRrRFPs34ZqSQnkuWzLBoZgru",
  "key22": "2DCBuiLCZbdiRzBFAbZ4HZ4TSR8ZBkD9xNFti4kcuJqiTw8RzqvX8MBT9wUamqhCYaYbPdyQ76FAV3kxYbLMVEtx",
  "key23": "3MyMSGNroijGbwfngmNWmgb1n2PXpTZdXjkJdZM77WP6YRhfWjPnC6G3hpVaCihUrh4B3EM6rdaCgDzpjkgwRNdJ",
  "key24": "254L5Dq6TJaJkb5cKbJSAXQEEGnLuok9nfHLxhP1QAaqCMHUSb2Vxxo561nyL1eAFk4xYXfQJ4D54Fk7PUJk11mP",
  "key25": "2nchLBDaryDig19tVSMfBSnQ8hubZTYvTahMwqASFRMXMmW3MkHzhnfchP4b4dbtuD2dXDSMBqT1tHyoQ6aQQUQi",
  "key26": "3n6HpkSejuGCbK7w7Wc3ptJBr6TKHVknAZXJnphAoqLJcgZh7A5J5keeR6JiCTtTrB6ihaVHhgyzAmbUjiyb1N7p",
  "key27": "2su7mGLnjV5MNdyes8ChieDyoMK9z1wjKiTdtHHkiwGxEJBDjWpz9GbJQJfQuQsiRC4vigaLhT1ovaqF5MaYxaM9",
  "key28": "2DWPPZoUh4iDk3KEqVRUq1AWJwEk19CFXj8Bh1YziyuQtrNgXfcC9nzX45SxBLN7MAGrZYHhVp9UBREQoEsV8g5M",
  "key29": "4L5xdHbdNaCMPJdUgpJr9c1jdC4n3rMVUorwy7joY7PPpTt5AwsLCFD9NZk3XAZuVdwkmNeN8LoWjBeWun2mP3Qg",
  "key30": "5u4ohXPmb2Fvw1PRc2KE5TVjvpVYZUdLdDpxMKDc6ir4bdwutKgqH4qje12qAqWbbCdgx6m3xtczci5C2u51Rh4i",
  "key31": "5GpRmUXLyfWEn2EVpXBKrK7LmXgFwyxMypvSdNUNaTA2hZXPQQPWmRRYkA2RtwuJNjvCmLbrCSfG17pcnrBKmMZX",
  "key32": "5tEfXAAQWgWJJ4LXjBCbGdbawweAbTsfdEmkfUinSyoadyFF5agiZzD64cziw954HFQR7yUCckcQbHMqJ2MoyoCL",
  "key33": "FekgoXPtMWiEneEnAa9gMAcUHA2xy3oS8HMmR6HwiFYdEgHRJphLArjGGKqnKH7GKiqcfiFY9nNcFAHtszz9Jhz",
  "key34": "4TCZQrEvPybDqyfeyx8cTzo86HzMBsdK8agw9RDDNUhtzrvPz24Cm5qu9KMesLmBqq8geoHTm6FckF9q5tiqfU34",
  "key35": "3kejxyZTAVANtvEv9rboN4AKsfhyo4PTn3kE65KokEe2ctn3cFJ952nAKn1qtbhum7KwYmSFraeLMpmWGqxnv6DL",
  "key36": "3HTanYGFXoNe4udpUYe1VKwdM7wHzx392YKbM3b28APr7KA8RWGkaj5hhqPJRXN45dNa9kS7hStUvFGyXX71dRiA",
  "key37": "fDmPWguLQg6WNUsmdyG84r4ZpNbHB9ibYaUMFYVroqhpGx5LAcC6D9Y1VMRVmKgUdS4YGVmcE1FHXJAVHLqNgJp",
  "key38": "5RHaN7HsTuaed8n9CQtNkbBexHSgG2eSHLxD5sxrBV362FgpVG4XbbpBbAhuRTuZrjfcR6FbVcjChzgjzPynWEiW",
  "key39": "2YoHSDgd3ut4wakGhfBTmUY41zxCPqg7EKn7vW1pAVPJGDiT6Lw7EMKLmZZRBo6uVyEtDCmdqQn5eUuR8AQoJvDU",
  "key40": "2kQPBv8mB7exGXEHy3aCoX2nbmpPbFyoNbVVWzHx1FxPUqqFdT3EzhFvo5P7Z9HuAzT6oxSHoTpko87bj1FVnd9q",
  "key41": "4sx6paRTtLRbEXyBeu87qMjC9gJc1iMSSMsUvHNcgEYLgzqaEzvjxnzv4YBmMEuc4MDQAuYbMuBZKo683QyutfuF",
  "key42": "2CmdAxrVj8feooJMHU1kaXfeYWew4qyTfyaV8D29DE98oSvHLr7rTpzDhh3zoLPZ39mJkBKi6Fwn6Xzett8gtYbC",
  "key43": "51xFa3nk9C8GtSohsBZS3TkS9EJXPNmUEympLGZp8fqx9vAYA18zgsjkAUE6BWXH9u9MgmupoigDbv91FF1AczEL",
  "key44": "22d9ZC9ejMxCmN4Vt4Zd9u6DzLdFYkHFAZEP7dhMp2xsDoHhYJyXXyFoP7cWt9vycp9B3i9jnk2rKrAEuZvmYDV3",
  "key45": "4bo4KJY1rZ64KWLi9qnyEjMjo9L9c29QbmGG3NcU3k67pUEZLux9HhCyv8DG6D5d4gKuoRKQvN8oeA1sqCai31FJ",
  "key46": "5RhnYYfRsWbuPChnSfvhgEHQX88tw4tSaZa33x6ExheNhGXpRP5s3JA3vmxVpbvCSp2B9i6t4XZrhVZBGYto8VMs"
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
